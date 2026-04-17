import { defineField, FieldType, RelationType } from 'twenty-sdk';
import { PROJECT_OBJECT_UNIVERSAL_IDENTIFIER, PROJECT_TIMELINE_ENTRIES_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_TIMELINE_ENTRY_OBJECT_UNIVERSAL_IDENTIFIER, PROJECT_TIMELINE_ENTRY_PROJECT_FIELD_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: PROJECT_TIMELINE_ENTRIES_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'timelineEntries',
  label: 'Timeline entries',
  relationTargetObjectMetadataUniversalIdentifier: PROJECT_TIMELINE_ENTRY_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROJECT_TIMELINE_ENTRY_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
