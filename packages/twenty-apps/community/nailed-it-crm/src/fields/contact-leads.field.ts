import { defineField, FieldType, RelationType } from 'twenty-sdk';
import { CONTACT_LEADS_FIELD_UNIVERSAL_IDENTIFIER, CONTACT_OBJECT_UNIVERSAL_IDENTIFIER, LEAD_CONTACT_FIELD_UNIVERSAL_IDENTIFIER, LEAD_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: CONTACT_LEADS_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: CONTACT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'leads',
  label: 'Leads',
  relationTargetObjectMetadataUniversalIdentifier: LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: LEAD_CONTACT_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
