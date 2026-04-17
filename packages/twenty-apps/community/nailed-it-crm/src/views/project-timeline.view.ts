import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  PROJECT_TIMELINE_ENTRY_OCCURRED_AT_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_TIMELINE_ENTRY_OBJECT_UNIVERSAL_IDENTIFIER,
  PROJECT_TIMELINE_ENTRY_TITLE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_TIMELINE_ENTRY_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export const PROJECT_TIMELINE_VIEW_UNIVERSAL_IDENTIFIER = 'b2674566-3163-4457-a117-2f6d133a62de';

export default defineView({
  universalIdentifier: PROJECT_TIMELINE_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'All timeline entries',
  objectUniversalIdentifier: PROJECT_TIMELINE_ENTRY_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconMessage',
  position: 1,
  fields: [
    { universalIdentifier: 'd17f9b3f-4a1e-4ae6-a4d2-31d4e8a7e901', fieldMetadataUniversalIdentifier: PROJECT_TIMELINE_ENTRY_TITLE_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 240 },
    { universalIdentifier: 'd17f9b3f-4a1e-4ae6-a4d2-31d4e8a7e902', fieldMetadataUniversalIdentifier: PROJECT_TIMELINE_ENTRY_TYPE_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 140 },
    { universalIdentifier: 'd17f9b3f-4a1e-4ae6-a4d2-31d4e8a7e903', fieldMetadataUniversalIdentifier: PROJECT_TIMELINE_ENTRY_OCCURRED_AT_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 180 },
  ],
});