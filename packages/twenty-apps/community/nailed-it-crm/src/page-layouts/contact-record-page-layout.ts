import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk';
import { CONTACT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';
import { CLIENT_DASHBOARD_WIDGET_UNIVERSAL_IDENTIFIER } from 'src/front-components/client-dashboard-widget';

export default definePageLayout({
  universalIdentifier: '5317c3eb-a351-4936-8b09-d1d6994903b2',
  name: 'Contact Record Page',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: CONTACT_OBJECT_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '6c6ae225-6c63-4c26-bfd3-07e22afc54d1',
      title: 'Overview',
      position: 50,
      icon: 'IconLayoutDashboard',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: '6c6ae225-6c63-4c26-bfd3-07e22afc54d2',
          title: 'Client dashboard',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: CLIENT_DASHBOARD_WIDGET_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
  ],
});
