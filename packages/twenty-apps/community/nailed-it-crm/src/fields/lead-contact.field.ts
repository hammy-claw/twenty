import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk';
import { CONTACT_LEADS_FIELD_UNIVERSAL_IDENTIFIER, CONTACT_OBJECT_UNIVERSAL_IDENTIFIER, LEAD_CONTACT_FIELD_UNIVERSAL_IDENTIFIER, LEAD_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: LEAD_CONTACT_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'contact',
  label: 'Contact',
  relationTargetObjectMetadataUniversalIdentifier: CONTACT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: CONTACT_LEADS_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'contactId',
  },
});
