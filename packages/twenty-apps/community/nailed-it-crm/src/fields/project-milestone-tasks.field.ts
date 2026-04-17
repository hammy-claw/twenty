import { defineField, FieldType, RelationType } from 'twenty-sdk';
import { PROJECT_MILESTONE_OBJECT_UNIVERSAL_IDENTIFIER, PROJECT_MILESTONE_TASKS_FIELD_UNIVERSAL_IDENTIFIER, TASK_MILESTONE_FIELD_UNIVERSAL_IDENTIFIER, TASK_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: PROJECT_MILESTONE_TASKS_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: PROJECT_MILESTONE_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'tasks',
  label: 'Tasks',
  relationTargetObjectMetadataUniversalIdentifier: TASK_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: TASK_MILESTONE_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
