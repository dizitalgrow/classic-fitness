export * from './business';
export * from './enquiry';

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
