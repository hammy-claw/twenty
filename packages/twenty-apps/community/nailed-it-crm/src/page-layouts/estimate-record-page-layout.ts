import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk';
import { ESTIMATE_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';
import { ESTIMATE_ASSEMBLY_WIDGET_UNIVERSAL_IDENTIFIER } from 'src/front-components/estimate-assembly-widget';
import { ESTIMATE_BUILD_WIDGET_UNIVERSAL_IDENTIFIER } from 'src/front-components/estimate-build-widget';
import { ESTIMATE_SCOPE_WIDGET_UNIVERSAL_IDENTIFIER } from 'src/front-components/estimate-scope-widget';

export default definePageLayout({
  universalIdentifier: 'bba29821-6e07-4f17-add6-940ea76b7bff',
  name: 'Estimate Record Page',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: ESTIMATE_OBJECT_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'a1c84d56-9c30-4c46-83ff-81fbf6e0b201',
      title: 'Scope',
      position: 50,
      icon: 'IconFileText',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: 'a1c84d56-9c30-4c46-83ff-81fbf6e0b202',
          title: 'Estimate scope',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: ESTIMATE_SCOPE_WIDGET_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
    {
      universalIdentifier: 'd2f56cf3-7e4b-4ae7-8d05-7b4477f7a1a1',
      title: 'Assembly',
      position: 60,
      icon: 'IconLayoutGrid',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: 'd2f56cf3-7e4b-4ae7-8d05-7b4477f7a1a2',
          title: 'Quote assembly',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: ESTIMATE_ASSEMBLY_WIDGET_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
    {
      universalIdentifier: 'd2f56cf3-7e4b-4ae7-8d05-7b4477f7a1a3',
      title: 'Build',
      position: 70,
      icon: 'IconPackages',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: 'd2f56cf3-7e4b-4ae7-8d05-7b4477f7a1a4',
          title: 'Estimate build',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: ESTIMATE_BUILD_WIDGET_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
  ],
});
