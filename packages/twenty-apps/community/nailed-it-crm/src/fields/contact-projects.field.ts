import { defineField, FieldType, RelationType } from 'twenty-sdk';
import { CONTACT_OBJECT_UNIVERSAL_IDENTIFIER, CONTACT_PROJECTS_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_CONTACT_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: CONTACT_PROJECTS_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: CONTACT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'projects',
  label: 'Projects',
  relationTargetObjectMetadataUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROJECT_CONTACT_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
