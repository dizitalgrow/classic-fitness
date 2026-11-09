import { NextRequest, NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/validations';
import { EnquiryApiResponse } from '@/types/enquiry';

// Basic in-memory rate limiting map: IP -> timestamp array
const ipSubmissionTracker = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipSubmissionTracker.get(ip) || [];
  
  // Filter out timestamps outside window
  const activeTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  activeTimestamps.push(now);
  ipSubmissionTracker.set(ip, activeTimestamps);
  return false;
}

export async function POST(request: NextRequest): Promise<NextResponse<EnquiryApiResponse>> {
  try {
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

    // 1. Rate Limiting Check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many submissions. Please wait a few minutes or message us directly on WhatsApp.',
        },
        { status: 429 }
      );
    }

    // 2. Parse body
    const body = await request.json();

    // 3. Server-side validation via Zod
    const validationResult = enquirySchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: 'Please correct the highlighted form errors.',
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;

    // 4. Honeypot Anti-Spam Check
    if (validData.honeypot && validData.honeypot.length > 0) {
      // Quietly reject bots with 200 to confuse crawlers
      return NextResponse.json({
        success: true,
        message: 'Your enquiry has been received.',
        enquiryId: `CF-MOCK-${Date.now()}`,
      });
    }

    const enquiryId = `CF-${Date.now().toString().slice(-6)}`;

    // 5. Lead delivery destination dispatch
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            enquiryId,
            submittedAt: new Date().toISOString(),
            ...validData,
          }),
        });
      } catch (webhookErr) {
        console.error('Error forwarding enquiry to webhook:', webhookErr);
        // Note: We don't fail user experience if webhook has temporary glitch, but log it
      }
    } else {
      // In development or when no external webhook is set, log details cleanly
      console.log('--- NEW CLASSIC FITNESS ENQUIRY RECEIVED ---');
      console.log(`ID: ${enquiryId}`);
      console.log(`Name: ${validData.fullName}`);
      console.log(`Phone: ${validData.phone}`);
      console.log(`Goal: ${validData.fitnessGoal}`);
      console.log(`Preferred Timing: ${validData.preferredTiming}`);
      console.log(`Type: ${validData.enquiryType}`);
      if (validData.message) console.log(`Note: ${validData.message}`);
      console.log('---------------------------------------------');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been successfully received. Coach Ravi & our team will contact you shortly!',
        enquiryId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Enquiry API Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error processing enquiry. Please connect directly via WhatsApp or phone.',
      },
      { status: 500 }
    );
  }
}
