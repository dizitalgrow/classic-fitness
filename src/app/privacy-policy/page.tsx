import type { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy | Classic Fitness HSR Layout',
  description: 'Privacy policy and data handling information for Classic Fitness website visitors and members.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <PageContainer>
      <section className="py-16 sm:py-24 bg-[#0e0e11] border-b border-[#414045]">
        <Container size="narrow">
          <div className="inline-block px-3.5 py-1 bg-[#16161a] text-[#ffc526] border border-[#ffc526]/30 font-mono text-xs uppercase tracking-wider mb-4 rounded-full shadow-sm">
            LEGAL ARCHIVE
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading uppercase text-[#f3f4f2] mb-4">
            PRIVACY POLICY
          </h1>
          <p className="font-mono text-xs text-[#b3b2b2]">
            Last Updated: November 2026 • Classic Fitness, HSR Layout, Bengaluru
          </p>
        </Container>
      </section>

      <section className="py-16 bg-[#08080b] border-b border-[#414045]">
        <Container size="narrow">
          <div className="space-y-8 font-body text-[#b3b2b2] text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="text-lg sm:text-xl font-heading uppercase text-[#f3f4f2] mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you submit an enquiry form or book a free trial through {siteConfig.name}, we collect basic contact information provided voluntarily by you, including your full name, mobile phone number, preferred training time, and fitness goals.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-heading uppercase text-content-primary mb-3 text-[#f3f4f2]">
                2. How We Use Your Information
              </h2>
              <p>
                The information collected is used exclusively to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 font-body">
                <li>Respond to your workout pass or membership enquiries.</li>
                <li>Coordinate trial booking slots and facility orientation.</li>
                <li>Provide accurate fitness and training details regarding our programmes.</li>
              </ul>
              <p className="mt-2">
                We will never sell, rent, lease, or distribute your personal contact information to any third-party marketing companies.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-heading uppercase text-[#f3f4f2] mb-3">
                3. Direct Communication
              </h2>
              <p>
                By providing your phone number on this website, you consent to receive direct contact from our gym staff or Head Coach Ravi via telephone call, SMS, or WhatsApp regarding your requested enquiry.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-heading uppercase text-[#f3f4f2] mb-3">
                4. Cookies and Web Analytics
              </h2>
              <p>
                We may use standard analytical cookies (such as Google Analytics) to monitor aggregate website traffic, page performance, and conversion interactions to improve user experience. These tools collect anonymized data and do not identify individual visitors personally.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-heading uppercase text-[#f3f4f2] mb-3">
                5. Contacting the Business
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to have your details deleted from our enquiry records, please contact us at:
              </p>
              <div className="mt-4 p-5 bg-[#111014] border border-[#414045] rounded-lg font-mono text-xs text-[#f3f4f2] space-y-1 shadow-lg">
                <p><strong className="text-[#ffc526]">{siteConfig.name}</strong></p>
                <p>{siteConfig.address.fullAddress}</p>
                <p>Email: {siteConfig.contact.email}</p>
                <p>Phone: {siteConfig.contact.phoneDisplay}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageContainer>
  );
}
