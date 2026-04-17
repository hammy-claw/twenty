import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  PROJECT_ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_LEAD_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  PROJECT_START_DATE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export const PROJECTS_VIEW_UNIVERSAL_IDENTIFIER = '59da26ef-0e0c-4d0c-93d6-15e151e340a5';

export default defineView({
  universalIdentifier: PROJECTS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'All projects',
  objectUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconHome',
  position: 1,
  fields: [
    { universalIdentifier: '4ac560ea-f78d-4a6c-9963-441e56e548ac', fieldMetadataUniversalIdentifier: PROJECT_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 220 },
    { universalIdentifier: '53bfb0f7-67bb-4bbf-8090-7c1a78edc78c', fieldMetadataUniversalIdentifier: PROJECT_STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 150 },
    { universalIdentifier: '59935e01-afdd-48a8-882b-5ae2fcab115e', fieldMetadataUniversalIdentifier: PROJECT_ADDRESS_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 260 },
    { universalIdentifier: 'c606a430-8583-4e78-b815-96e7fde59504', fieldMetadataUniversalIdentifier: PROJECT_START_DATE_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true, size: 150 },
    { universalIdentifier: '913ca819-e7b7-424f-aa82-eda09f737e70', fieldMetadataUniversalIdentifier: PROJECT_LEAD_FIELD_UNIVERSAL_IDENTIFIER, position: 4, isVisible: true, size: 180 },
  ],
});
