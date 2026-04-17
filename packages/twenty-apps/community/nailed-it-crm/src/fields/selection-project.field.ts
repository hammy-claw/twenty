import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk';
import { PROJECT_OBJECT_UNIVERSAL_IDENTIFIER, PROJECT_SELECTIONS_FIELD_UNIVERSAL_IDENTIFIER, SELECTION_OBJECT_UNIVERSAL_IDENTIFIER, SELECTION_PROJECT_FIELD_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: SELECTION_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: SELECTION_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'project',
  label: 'Project',
  relationTargetObjectMetadataUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROJECT_SELECTIONS_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'projectId',
  },
});
