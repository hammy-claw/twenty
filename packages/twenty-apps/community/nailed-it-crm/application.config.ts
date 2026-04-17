import { defineApplication } from 'twenty-sdk';

export const APPLICATION_UNIVERSAL_IDENTIFIER = 'bf42bdf7-2add-4b89-8f2e-5dcf8e17e8eb';

export default defineApplication({
  universalIdentifier: APPLICATION_UNIVERSAL_IDENTIFIER,
  displayName: 'Nailed It CRM',
  description: 'A premium renovation CRM for Nailed It Developments',
  icon: 'IconHome',
  author: 'Nailed It Developments',
  category: 'business',
  logoUrl: 'public/logo.svg',
  screenshots: ['public/screenshot-dashboard.svg'],
  websiteUrl: 'https://naileditdevelopments.ca',
  emailSupport: 'ashton@naileditdevelopments.ca',
  aboutDescription: 'A lean, high-trust, AI-assisted renovation operating system built to replace Houzz for Nailed It Developments.',
  applicationVariables: {
    BRAND_NAME: {
      universalIdentifier: '0cb7bba1-81c8-4a1d-bca7-5c0caa2a1001',
      description: 'Brand name shown in prompts and messages',
      value: 'Nailed It Developments',
      isSecret: false,
    },
    SUPPORT_EMAIL: {
      universalIdentifier: '0cb7bba1-81c8-4a1d-bca7-5c0caa2a1002',
      description: 'Support contact for the CRM',
      value: 'ashton@naileditdevelopments.ca',
      isSecret: false,
    },
    QUALIFY_PHONE_FIRST: {
      universalIdentifier: '0cb7bba1-81c8-4a1d-bca7-5c0caa2a1003',
      description: 'Default sales rule for lead qualification',
      value: 'true',
      isSecret: false,
    },
  },
  defaultRoleUniversalIdentifier: '2f562733-dc12-403c-a144-d2a967d1c8f5',
});
