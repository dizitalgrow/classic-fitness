export interface EnquiryFormData {
  fullName: string;
  phone: string;
  fitnessGoal: string;
  preferredTiming: string;
  enquiryType: 'Free Trial' | 'Membership' | 'Personal Training' | 'General Enquiry';
  message?: string;
}

export interface EnquiryApiResponse {
  success: boolean;
  message: string;
  enquiryId?: string;
  errors?: Record<string, string[]>;
}
