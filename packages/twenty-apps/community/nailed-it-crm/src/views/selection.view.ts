import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  SELECTION_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER,
  SELECTION_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  SELECTION_OBJECT_UNIVERSAL_IDENTIFIER,
  SELECTION_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  SELECTION_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  SELECTION_VENDOR_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export const SELECTIONS_VIEW_UNIVERSAL_IDENTIFIER = '9a1fe615-f1d1-456b-8c28-f67d85994285';

export default defineView({
  universalIdentifier: SELECTIONS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'All selections',
  objectUniversalIdentifier: SELECTION_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconChecklist',
  position: 1,
  fields: [
    { universalIdentifier: 'f1f959a5-6da0-4549-865f-97c9c1d15dad', fieldMetadataUniversalIdentifier: SELECTION_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 220 },
    { universalIdentifier: '2968e751-18b0-4349-8d78-f934d12af949', fieldMetadataUniversalIdentifier: SELECTION_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 150 },
    { universalIdentifier: '0c73b9f4-7a34-4347-92e0-487a37b7fc17', fieldMetadataUniversalIdentifier: SELECTION_STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 140 },
    { universalIdentifier: '799ab7ca-9a62-41bc-be52-05e54bda99b0', fieldMetadataUniversalIdentifier: SELECTION_VENDOR_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true, size: 180 },
    { universalIdentifier: '46ecff91-7a63-45be-884a-6d113cb9332c', fieldMetadataUniversalIdentifier: SELECTION_PROJECT_FIELD_UNIVERSAL_IDENTIFIER, position: 4, isVisible: true, size: 180 },
  ],
});
