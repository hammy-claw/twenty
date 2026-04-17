import { defineObject, FieldType } from 'twenty-sdk';
import {
  PROJECT_MILESTONE_COMPLETED_AT_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_OBJECT_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export {
  PROJECT_MILESTONE_COMPLETED_AT_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_OBJECT_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_MILESTONE_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER,
};


export default defineObject({
  universalIdentifier: PROJECT_MILESTONE_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'projectMilestone',
  namePlural: 'projectMilestones',
  labelSingular: 'Milestone',
  labelPlural: 'Milestones',
  description: 'Major project handoff points and stage gates',
  icon: 'IconFlag',
  labelIdentifierFieldMetadataUniversalIdentifier: PROJECT_MILESTONE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    { universalIdentifier: PROJECT_MILESTONE_NAME_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'name', label: 'Milestone', icon: 'IconFlag' },

    { universalIdentifier: PROJECT_MILESTONE_STATUS_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.SELECT, name: 'status', label: 'Status', options: [
      { id: '1b8d3f30-a2f4-4fb5-8b44-9d2b2ec8e601', value: 'PLANNED', label: 'Planned', color: 'gray', position: 0 },
      { id: '1b8d3f30-a2f4-4fb5-8b44-9d2b2ec8e602', value: 'IN_PROGRESS', label: 'In progress', color: 'blue', position: 1 },
      { id: '1b8d3f30-a2f4-4fb5-8b44-9d2b2ec8e603', value: 'BLOCKED', label: 'Blocked', color: 'red', position: 2 },
      { id: '1b8d3f30-a2f4-4fb5-8b44-9d2b2ec8e604', value: 'DONE', label: 'Done', color: 'green', position: 3 },
    ] },

    { universalIdentifier: PROJECT_MILESTONE_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE, name: 'targetDate', label: 'Target date', icon: 'IconCalendar' },

    { universalIdentifier: PROJECT_MILESTONE_COMPLETED_AT_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'completedAt', label: 'Completed at', icon: 'IconCalendarCheck' },
      ],
});
