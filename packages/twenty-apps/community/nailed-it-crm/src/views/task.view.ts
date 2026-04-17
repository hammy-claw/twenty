import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  TASK_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  TASK_OBJECT_UNIVERSAL_IDENTIFIER,
  TASK_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  TASK_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  TASK_TRADE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export const TASKS_VIEW_UNIVERSAL_IDENTIFIER = 'c2c97e52-eb08-41ab-a0b9-587d69ce3bd3';

export default defineView({
  universalIdentifier: TASKS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'All tasks',
  objectUniversalIdentifier: TASK_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconChecklist',
  position: 1,
  fields: [
    { universalIdentifier: 'e6dd1204-a36f-4f0a-8b3f-cc9df9b35ff1', fieldMetadataUniversalIdentifier: TASK_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 220 },
    { universalIdentifier: '6f50163b-04f9-4a90-b246-f2e3ae653e92', fieldMetadataUniversalIdentifier: TASK_STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 140 },
    { universalIdentifier: 'e4f18b15-c679-4905-b3a0-1ddbdd6e918d', fieldMetadataUniversalIdentifier: TASK_TRADE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 140 },
    { universalIdentifier: '7ac1cee0-27e5-417c-a155-cd13f514bed7', fieldMetadataUniversalIdentifier: TASK_PROJECT_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true, size: 180 },
  ],
});
