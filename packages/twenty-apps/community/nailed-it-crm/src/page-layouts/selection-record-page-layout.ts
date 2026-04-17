import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk';
import { SELECTION_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';
import { PROJECT_OPS_WIDGET_UNIVERSAL_IDENTIFIER } from 'src/front-components/project-ops-widget';

export default definePageLayout({
  universalIdentifier: '970a7f5f-e30f-418c-83f3-6012688bf10b',
  name: 'Selection Record Page',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: SELECTION_OBJECT_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'a1c84d56-9c30-4c46-83ff-81fbf6e0b301',
      title: 'Decision log',
      position: 50,
      icon: 'IconChecklist',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: 'a1c84d56-9c30-4c46-83ff-81fbf6e0b302',
          title: 'Selections and procurement',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: PROJECT_OPS_WIDGET_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
  ],
});
