import { defineField, FieldType, RelationType } from 'twenty-sdk';
import { PROJECT_MILESTONES_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_MILESTONE_OBJECT_UNIVERSAL_IDENTIFIER, PROJECT_MILESTONE_PROJECT_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: PROJECT_MILESTONES_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'milestones',
  label: 'Milestones',
  relationTargetObjectMetadataUniversalIdentifier: PROJECT_MILESTONE_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROJECT_MILESTONE_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
