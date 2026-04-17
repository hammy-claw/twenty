import { defineObject, FieldType } from 'twenty-sdk';
import { type FieldMetadataComplexOption } from 'twenty-shared/types';
import {
  PROJECT_ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_CONTRACT_VALUE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  PROJECT_START_DATE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_SUMMARY_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_TARGET_FINISH_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineObject({
  universalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'project',
  namePlural: 'projects',
  labelSingular: 'Project',
  labelPlural: 'Projects',
  description: 'Active renovation jobs and client projects',
  icon: 'IconHome',
  labelIdentifierFieldMetadataUniversalIdentifier: PROJECT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: PROJECT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Project name',
      icon: 'IconHome',
    },

    {
      universalIdentifier: PROJECT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      options: ([
    {
      id: '51002d7a-a7de-4db1-aafb-294d2b3ddbfa',
      value: 'PRE_CONSTRUCTION',
      label: 'Pre-construction',
      color: 'blue',
      position: 0,
    },
    {
      id: 'b53824b8-3a2a-4547-90ec-e63feba4c47e',
      value: 'DESIGN',
      label: 'Design',
      color: 'purple',
      position: 1,
    },
    {
      id: '475712f1-6cd1-409c-8c05-cb331deb97c4',
      value: 'ACTIVE',
      label: 'Active',
      color: 'green',
      position: 2,
    },
    {
      id: '87d34b65-66c2-411d-acad-5231dbf4b9cb',
      value: 'WARRANTY',
      label: 'Warranty',
      color: 'yellow',
      position: 3,
    },
    {
      id: '84ecdb08-7e0e-487e-881a-219d68f04207',
      value: 'CLOSED',
      label: 'Closed',
      color: 'gray',
      position: 4,
    }
      ]) as unknown as FieldMetadataComplexOption[],
    },

    {
      universalIdentifier: PROJECT_ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'projectAddress',
      label: 'Project address',
      icon: 'IconMapPin',
    },

    {
      universalIdentifier: PROJECT_START_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.DATE,
      name: 'startDate',
      label: 'Start date',
      icon: 'IconCalendar',
    },

    {
      universalIdentifier: PROJECT_TARGET_FINISH_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.DATE,
      name: 'targetFinish',
      label: 'Target finish',
      icon: 'IconCalendar',
    },

    {
      universalIdentifier: PROJECT_CONTRACT_VALUE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'contractValue',
      label: 'Contract value',
      icon: 'IconCurrencyDollar',
    },

    {
      universalIdentifier: PROJECT_SUMMARY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'summary',
      label: 'Scope summary',
      icon: 'IconFileText',
    },

  ],
});
