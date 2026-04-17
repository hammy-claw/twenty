import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk';
import { PROJECT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';
import { PROJECT_COMMUNICATION_WIDGET_UNIVERSAL_IDENTIFIER } from 'src/front-components/project-communication-widget';
import { PROJECT_TIMELINE_WIDGET_UNIVERSAL_IDENTIFIER } from 'src/front-components/project-timeline-widget';
import { PROJECT_WORKSPACE_WIDGET_UNIVERSAL_IDENTIFIER } from 'src/front-components/project-workspace-widget';

export default definePageLayout({
  universalIdentifier: '3082daf7-7e43-4c08-8df2-90f6618c1dd3',
  name: 'Project Record Page',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'a1c84d56-9c30-4c46-83ff-81fbf6e0b401',
      title: 'Overview',
      position: 50,
      icon: 'IconLayoutDashboard',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: 'a1c84d56-9c30-4c46-83ff-81fbf6e0b402',
          title: 'Project workspace',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: PROJECT_WORKSPACE_WIDGET_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
    {
      universalIdentifier: 'a1c84d56-9c30-4c46-83ff-81fbf6e0b403',
      title: 'Timeline',
      position: 60,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: 'a1c84d56-9c30-4c46-83ff-81fbf6e0b404',
          title: 'Project timeline',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: PROJECT_TIMELINE_WIDGET_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
    {
      universalIdentifier: 'a1c84d56-9c30-4c46-83ff-81fbf6e0b405',
      title: 'Communication',
      position: 70,
      icon: 'IconMessageCircle2',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: 'a1c84d56-9c30-4c46-83ff-81fbf6e0b406',
          title: 'Communication timeline',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: PROJECT_COMMUNICATION_WIDGET_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
  ],
});
