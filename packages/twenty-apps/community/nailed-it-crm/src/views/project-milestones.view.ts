import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  PROJECT_MILESTONE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_OBJECT_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export const PROJECT_MILESTONES_VIEW_UNIVERSAL_IDENTIFIER = 'ed204399-8245-4871-a6bd-e7ba04214500';

export default defineView({
  universalIdentifier: PROJECT_MILESTONES_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'All milestones',
  objectUniversalIdentifier: PROJECT_MILESTONE_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconFlag',
  position: 1,
  fields: [
    { universalIdentifier: '7a05d3a4-f1e5-4f48-8128-8d5f2b2d8801', fieldMetadataUniversalIdentifier: PROJECT_MILESTONE_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 240 },
    { universalIdentifier: '7a05d3a4-f1e5-4f48-8128-8d5f2b2d8802', fieldMetadataUniversalIdentifier: PROJECT_MILESTONE_STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 140 },
    { universalIdentifier: '7a05d3a4-f1e5-4f48-8128-8d5f2b2d8803', fieldMetadataUniversalIdentifier: PROJECT_MILESTONE_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 150 },
  ],
});