import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk';
import { LEAD_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';
import { LEAD_QUALIFICATION_WIDGET_UNIVERSAL_IDENTIFIER } from 'src/front-components/lead-qualification-widget';

export default definePageLayout({
  universalIdentifier: '2b7a9c72-01e6-40a5-8633-848bb369ffe6',
  name: 'Lead Record Page',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'a1c84d56-9c30-4c46-83ff-81fbf6e0b101',
      title: 'Qualification',
      position: 50,
      icon: 'IconChecklist',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: 'a1c84d56-9c30-4c46-83ff-81fbf6e0b102',
          title: 'Lead qualification',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: LEAD_QUALIFICATION_WIDGET_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
  ],
});
