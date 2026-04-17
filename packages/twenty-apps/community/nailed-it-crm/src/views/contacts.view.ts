import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  CONTACT_COMPANY_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CONTACT_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
  CONTACT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CONTACT_OBJECT_UNIVERSAL_IDENTIFIER,
  CONTACT_PHONE_FIELD_UNIVERSAL_IDENTIFIER,
  CONTACT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export const CONTACTS_VIEW_UNIVERSAL_IDENTIFIER = '78e75f67-8005-4913-899a-bd940fcbc0a8';

export default defineView({
  universalIdentifier: CONTACTS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'All contacts',
  objectUniversalIdentifier: CONTACT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconUsers',
  position: 3,
  fields: [
    { universalIdentifier: 'd6c3307d-39ad-4f52-b03f-76c707e0b851', fieldMetadataUniversalIdentifier: CONTACT_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 220 },
    { universalIdentifier: '7f8fbc68-1f01-48f9-82fd-6b5f8e2ff5b5', fieldMetadataUniversalIdentifier: CONTACT_COMPANY_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 220 },
    { universalIdentifier: 'ecaf0dd5-df3f-4f13-bdd4-4f8ed33aa6a3', fieldMetadataUniversalIdentifier: CONTACT_TYPE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 160 },
    { universalIdentifier: '4a0dcb0c-c9bb-4f89-8a3b-b7dffda8f5e9', fieldMetadataUniversalIdentifier: CONTACT_PHONE_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true, size: 180 },
    { universalIdentifier: 'c1d4fa75-fc70-4ed2-a5f0-981a6c6f1fd6', fieldMetadataUniversalIdentifier: CONTACT_EMAIL_FIELD_UNIVERSAL_IDENTIFIER, position: 4, isVisible: true, size: 240 },
  ],
});
