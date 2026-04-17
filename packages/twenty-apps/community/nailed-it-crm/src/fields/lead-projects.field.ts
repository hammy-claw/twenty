import { defineField, FieldType, RelationType } from 'twenty-sdk';
import { LEAD_OBJECT_UNIVERSAL_IDENTIFIER, LEAD_PROJECTS_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_LEAD_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: LEAD_PROJECTS_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'projects',
  label: 'Projects',
  relationTargetObjectMetadataUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROJECT_LEAD_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
