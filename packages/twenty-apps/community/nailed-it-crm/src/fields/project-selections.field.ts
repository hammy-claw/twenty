import { defineField, FieldType, RelationType } from 'twenty-sdk';
import { PROJECT_OBJECT_UNIVERSAL_IDENTIFIER, PROJECT_SELECTIONS_FIELD_UNIVERSAL_IDENTIFIER, SELECTION_OBJECT_UNIVERSAL_IDENTIFIER, SELECTION_PROJECT_FIELD_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: PROJECT_SELECTIONS_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'selections',
  label: 'Selections',
  relationTargetObjectMetadataUniversalIdentifier: SELECTION_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: SELECTION_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
