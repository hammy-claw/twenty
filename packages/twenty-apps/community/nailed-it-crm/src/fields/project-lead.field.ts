import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk';
import { LEAD_OBJECT_UNIVERSAL_IDENTIFIER, LEAD_PROJECTS_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_LEAD_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: PROJECT_LEAD_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'lead',
  label: 'Lead',
  relationTargetObjectMetadataUniversalIdentifier: LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: LEAD_PROJECTS_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'leadId',
  },
});
