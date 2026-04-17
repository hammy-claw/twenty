import { defineObject, FieldType } from 'twenty-sdk';
import { type FieldMetadataComplexOption } from 'twenty-shared/types';
import {
  PROJECT_TIMELINE_ENTRY_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_TIMELINE_ENTRY_OCCURRED_AT_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_TIMELINE_ENTRY_OBJECT_UNIVERSAL_IDENTIFIER,
  PROJECT_TIMELINE_ENTRY_TITLE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_TIMELINE_ENTRY_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

const projectTimelineEntryTypeOptions = [
  { id: '2d8f0ad1-7c44-4f1b-b78d-b8c5d6f6f001', value: 'CALL', label: 'Call', color: 'blue', position: 0 },
  { id: '2d8f0ad1-7c44-4f1b-b78d-b8c5d6f6f002', value: 'EMAIL', label: 'Email', color: 'green', position: 1 },
  { id: '2d8f0ad1-7c44-4f1b-b78d-b8c5d6f6f003', value: 'SITE_VISIT', label: 'Site visit', color: 'yellow', position: 2 },
  { id: '2d8f0ad1-7c44-4f1b-b78d-b8c5d6f6f004', value: 'APPROVAL', label: 'Approval', color: 'teal', position: 3 },
  { id: '2d8f0ad1-7c44-4f1b-b78d-b8c5d6f6f005', value: 'UPDATE', label: 'Update', color: 'purple', position: 4 },
] as FieldMetadataComplexOption[];

export default defineObject({
  universalIdentifier: PROJECT_TIMELINE_ENTRY_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'projectTimelineEntry',
  namePlural: 'projectTimelineEntries',
  labelSingular: 'Timeline entry',
  labelPlural: 'Timeline entries',
  description: 'Calls, updates, walkthroughs, and client communication notes',
  icon: 'IconMessage',
  labelIdentifierFieldMetadataUniversalIdentifier: PROJECT_TIMELINE_ENTRY_TITLE_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    { universalIdentifier: PROJECT_TIMELINE_ENTRY_TITLE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'title', label: 'Title', icon: 'IconMessage' },

    { universalIdentifier: PROJECT_TIMELINE_ENTRY_TYPE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.SELECT, name: 'entryType', label: 'Type', options: projectTimelineEntryTypeOptions },

    { universalIdentifier: PROJECT_TIMELINE_ENTRY_OCCURRED_AT_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'occurredAt', label: 'Occurred at', icon: 'IconClock' },

    { universalIdentifier: PROJECT_TIMELINE_ENTRY_NOTES_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'notes', label: 'Notes', icon: 'IconFileText' },
  ],
});
