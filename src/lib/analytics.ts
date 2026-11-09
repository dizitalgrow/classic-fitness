type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Safe window interface
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
    fbq?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

export const trackEvent = ({ action, category, label, value }: GTagEvent): void => {
  if (typeof window === 'undefined') return;

  // Google Analytics 4 event
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Meta Pixel event
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', action, {
      category,
      label,
    });
  }

  // Fallback console log in dev mode
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event] ${category} > ${action} ${label ? `(${label})` : ''}`);
  }
};

// Explicit helpers for prompt-required conversion points
export const trackPhoneClick = (location: string): void => {
  trackEvent({
    action: 'phone_call_click',
    category: 'Lead Engagement',
    label: location,
  });
};

export const trackWhatsAppClick = (location: string): void => {
  trackEvent({
    action: 'whatsapp_chat_click',
    category: 'Lead Engagement',
    label: location,
  });
};

export const trackFreeTrialClick = (location: string): void => {
  trackEvent({
    action: 'free_trial_cta_click',
    category: 'Conversion Funnel',
    label: location,
  });
};

export const trackEnquirySubmit = (enquiryType: string): void => {
  trackEvent({
    action: 'enquiry_form_submitted',
    category: 'Conversion',
    label: enquiryType,
  });
};
