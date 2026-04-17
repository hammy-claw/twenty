import { defineObject, FieldType } from 'twenty-sdk';
import { type FieldMetadataComplexOption } from 'twenty-shared/types';
import {
  TASK_ASSIGNEE_FIELD_UNIVERSAL_IDENTIFIER,
  TASK_DUE_DATE_FIELD_UNIVERSAL_IDENTIFIER,
  TASK_ESTIMATED_HOURS_FIELD_UNIVERSAL_IDENTIFIER,
  TASK_LOGGED_HOURS_FIELD_UNIVERSAL_IDENTIFIER,
  TASK_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  TASK_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  TASK_OBJECT_UNIVERSAL_IDENTIFIER,
  TASK_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  TASK_TRADE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';


export default defineObject({
  universalIdentifier: TASK_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'productionTask',
  namePlural: 'productionTasks',
  labelSingular: 'Production task',
  labelPlural: 'Production tasks',
  description: 'High-level production planning and trade assignments',
  icon: 'IconChecklist',
  labelIdentifierFieldMetadataUniversalIdentifier: TASK_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: TASK_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Task',
      icon: 'IconChecklist',
    },

    {
      universalIdentifier: TASK_TRADE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'trade',
      label: 'Trade',
      options: ([
    {
      id: 'd5da9ca3-0218-4983-9e44-bf3acfb88462',
      value: 'GENERAL',
      label: 'General',
      color: 'gray',
      position: 0,
    },
    {
      id: '16bb8e8a-4913-4f82-99fd-a39bf78ea1a0',
      value: 'DEMOLITION',
      label: 'Demolition',
      color: 'red',
      position: 1,
    },
    {
      id: 'b7404fa2-79bf-4afb-875d-49c569e1e2f0',
      value: 'CARPENTRY',
      label: 'Carpentry',
      color: 'orange',
      position: 2,
    },
    {
      id: '16f9bf03-e706-4331-a8e1-510b15b0510c',
      value: 'PLUMBING',
      label: 'Plumbing',
      color: 'blue',
      position: 3,
    },
    {
      id: 'cff7e4f2-e2f0-4345-adc9-218abb4d4008',
      value: 'ELECTRICAL',
      label: 'Electrical',
      color: 'yellow',
      position: 4,
    },
    {
      id: '43837c15-58a7-4346-b4db-2a02cdae66ad',
      value: 'PAINT',
      label: 'Paint',
      color: 'teal',
      position: 5,
    },
    {
      id: 'a4322267-6a95-444c-852f-a555ad90e0d9',
      value: 'OTHER',
      label: 'Other',
      color: 'gray',
      position: 6,
    }
      ]) as unknown as FieldMetadataComplexOption[],
    },

    {
      universalIdentifier: TASK_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      options: ([
    {
      id: 'ece08361-064b-4b3d-a523-a93c945c465d',
      value: 'NOT_STARTED',
      label: 'Not started',
      color: 'gray',
      position: 0,
    },
    {
      id: 'a53b889d-252c-41b2-9c13-c825273b931e',
      value: 'READY',
      label: 'Ready',
      color: 'blue',
      position: 1,
    },
    {
      id: '35164248-bfb5-476f-b72e-89985baa13ec',
      value: 'IN_PROGRESS',
      label: 'In progress',
      color: 'yellow',
      position: 2,
    },
    {
      id: 'eef7dcdb-775c-433c-bc25-c9533e5471c8',
      value: 'BLOCKED',
      label: 'Blocked',
      color: 'red',
      position: 3,
    },
    {
      id: '78ae77d5-1c37-4309-9161-996a53435455',
      value: 'DONE',
      label: 'Done',
      color: 'green',
      position: 4,
    }
      ]) as unknown as FieldMetadataComplexOption[],
    },

    {
      universalIdentifier: TASK_DUE_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.DATE,
      name: 'dueDate',
      label: 'Due date',
      icon: 'IconCalendar',
    },

    {
      universalIdentifier: TASK_ASSIGNEE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'assignee',
      label: 'Assignee',
      icon: 'IconUser',
    },

    {
      universalIdentifier: TASK_ESTIMATED_HOURS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'estimatedHours',
      label: 'Estimated hours',
      icon: 'IconClock',
    },

    {
      universalIdentifier: TASK_LOGGED_HOURS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'loggedHours',
      label: 'Logged hours',
      icon: 'IconClockHour4',
    },

    {
      universalIdentifier: TASK_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'notes',
      label: 'Notes',
      icon: 'IconFileText',
    },
      ],
});
