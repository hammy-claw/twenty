import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk';
import { INVOICE_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';
import { INVOICE_WIDGET_UNIVERSAL_IDENTIFIER } from 'src/front-components/invoice-workspace-widget';

export default definePageLayout({
  universalIdentifier: '99342075-bd7e-49a5-ae3e-2ee4b792132f',
  name: 'Invoice Record Page',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: INVOICE_OBJECT_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'd9b45f65-67b3-4f0a-9ca8-e11e59b85c01',
      title: 'Overview',
      position: 50,
      icon: 'IconReceipt2',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: 'd9b45f65-67b3-4f0a-9ca8-e11e59b85c02',
          title: 'Invoice workspace',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: INVOICE_WIDGET_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
  ],
});
