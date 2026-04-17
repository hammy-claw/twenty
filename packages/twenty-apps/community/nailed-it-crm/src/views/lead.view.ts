import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  LEAD_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
  LEAD_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  LEAD_PHONE_FIELD_UNIVERSAL_IDENTIFIER,
  LEAD_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export const LEADS_VIEW_UNIVERSAL_IDENTIFIER = '5eeca818-cbb9-4564-97cf-11d28d24ef77';

export default defineView({
  universalIdentifier: LEADS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'All leads',
  objectUniversalIdentifier: LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconUser',
  position: 1,
  fields: [
    { universalIdentifier: '7837f51d-ae02-4904-933b-1524bd1b6b69', fieldMetadataUniversalIdentifier: LEAD_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 220 },
    { universalIdentifier: '9d3a0aa4-c6f6-48b4-8b0d-a7a275bb308c', fieldMetadataUniversalIdentifier: LEAD_STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 160 },
    { universalIdentifier: 'f67e5345-08c2-4f95-bead-60542b75a9c6', fieldMetadataUniversalIdentifier: LEAD_PHONE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 180 },
    { universalIdentifier: '4f1759a0-0a67-43a8-b4e5-de337945676e', fieldMetadataUniversalIdentifier: LEAD_EMAIL_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true, size: 220 },
  ],
});
