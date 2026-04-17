import { defineField, FieldType, RelationType } from 'twenty-sdk';
import { ESTIMATE_OBJECT_UNIVERSAL_IDENTIFIER, ESTIMATE_PROJECT_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_ESTIMATES_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: PROJECT_ESTIMATES_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'estimates',
  label: 'Estimates',
  relationTargetObjectMetadataUniversalIdentifier: ESTIMATE_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ESTIMATE_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
