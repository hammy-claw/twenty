import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk';
import { ESTIMATE_OBJECT_UNIVERSAL_IDENTIFIER, ESTIMATE_PROJECT_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_ESTIMATES_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: ESTIMATE_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: ESTIMATE_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'project',
  label: 'Project',
  relationTargetObjectMetadataUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROJECT_ESTIMATES_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'projectId',
  },
});
