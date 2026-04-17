import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk';
import { PROJECT_OBJECT_UNIVERSAL_IDENTIFIER, PROJECT_TIMELINE_ENTRIES_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_TIMELINE_ENTRY_OBJECT_UNIVERSAL_IDENTIFIER, PROJECT_TIMELINE_ENTRY_PROJECT_FIELD_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: PROJECT_TIMELINE_ENTRY_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: PROJECT_TIMELINE_ENTRY_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'project',
  label: 'Project',
  relationTargetObjectMetadataUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROJECT_TIMELINE_ENTRIES_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'projectId',
  },
});
