import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk';
import { CHANGE_ORDER_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';
import { CHANGE_ORDER_APPROVAL_WIDGET_UNIVERSAL_IDENTIFIER } from 'src/front-components/change-order-approval-widget';
import { CHANGE_ORDER_WORKSPACE_WIDGET_UNIVERSAL_IDENTIFIER } from 'src/front-components/change-order-workspace-widget';

export default definePageLayout({
  universalIdentifier: 'd5e3d9b5-0a51-4f9f-8f0c-2d4a4efb8f3a',
  name: 'Change Order Record Page',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: CHANGE_ORDER_OBJECT_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'd5e3d9b5-0a51-4f9f-8f0c-2d4a4efb8f3b',
      title: 'Overview',
      position: 50,
      icon: 'IconRefresh',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: 'd5e3d9b5-0a51-4f9f-8f0c-2d4a4efb8f3c',
          title: 'Change order workspace',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: CHANGE_ORDER_WORKSPACE_WIDGET_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
    {
      universalIdentifier: 'd5e3d9b5-0a51-4f9f-8f0c-2d4a4efb8f3d',
      title: 'Approval',
      position: 60,
      icon: 'IconChecklist',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: 'd5e3d9b5-0a51-4f9f-8f0c-2d4a4efb8f3e',
          title: 'Approval workflow',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: CHANGE_ORDER_APPROVAL_WIDGET_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
  ],
});
