import { defineObject, FieldType } from 'twenty-sdk';
import { type FieldMetadataComplexOption } from 'twenty-shared/types';
import {
  LEAD_BUDGET_FIELD_UNIVERSAL_IDENTIFIER,
  LEAD_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
  LEAD_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  LEAD_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  LEAD_PHONE_FIELD_UNIVERSAL_IDENTIFIER,
  LEAD_PROJECT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  LEAD_SOURCE_FIELD_UNIVERSAL_IDENTIFIER,
  LEAD_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineObject({
  universalIdentifier: LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'lead',
  namePlural: 'leads',
  labelSingular: 'Lead',
  labelPlural: 'Leads',
  description: 'Qualified or unqualified renovation opportunities',
  icon: 'IconUser',
  labelIdentifierFieldMetadataUniversalIdentifier: LEAD_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: LEAD_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Lead name',
      icon: 'IconUser',
    },

    {
      universalIdentifier: LEAD_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      options: ([
    {
      id: 'b1518226-c75d-4a25-b79c-20b493e2b6ee',
      value: 'NEW',
      label: 'New',
      color: 'blue',
      position: 0,
    },
    {
      id: '9d32303e-7c15-4e3a-b60c-61715e995088',
      value: 'QUALIFIED',
      label: 'Qualified',
      color: 'green',
      position: 1,
    },
    {
      id: 'cc06aedd-141f-45bb-906d-a3bfaebb9f71',
      value: 'QUOTE_SENT',
      label: 'Quote sent',
      color: 'yellow',
      position: 2,
    },
    {
      id: '8cad5669-ba8c-4bdb-8f2d-c9d87cf483a6',
      value: 'WON',
      label: 'Won',
      color: 'teal',
      position: 3,
    },
    {
      id: '006f1cc3-77db-4008-a3bb-6f932c1960aa',
      value: 'LOST',
      label: 'Lost',
      color: 'red',
      position: 4,
    }
      ]) as unknown as FieldMetadataComplexOption[],
    },

    {
      universalIdentifier: LEAD_SOURCE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'source',
      label: 'Source',
      options: ([
    {
      id: '1675f255-d7a7-4397-b1dd-7164d8e4a111',
      value: 'HOUZZ',
      label: 'Houzz',
      color: 'blue',
      position: 0,
    },
    {
      id: '71791a7c-9306-4478-96d8-aebbcb6c7750',
      value: 'WEBSITE',
      label: 'Website',
      color: 'green',
      position: 1,
    },
    {
      id: '59b692ee-1aab-49b0-8cd1-4e645e87ecda',
      value: 'REFERRAL',
      label: 'Referral',
      color: 'teal',
      position: 2,
    },
    {
      id: 'ff63e50d-54d5-4db8-846e-4cc2341901c7',
      value: 'REPEAT',
      label: 'Repeat client',
      color: 'yellow',
      position: 3,
    },
    {
      id: 'ec6e6b5d-5318-4545-b17c-a6e4473b0a4c',
      value: 'OTHER',
      label: 'Other',
      color: 'gray',
      position: 4,
    }
      ]) as unknown as FieldMetadataComplexOption[],
    },

    {
      universalIdentifier: LEAD_PHONE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'phone',
      label: 'Phone',
      icon: 'IconPhone',
    },

    {
      universalIdentifier: LEAD_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.EMAILS,
      name: 'email',
      label: 'Email',
      icon: 'IconMail',
    },

    {
      universalIdentifier: LEAD_PROJECT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'projectType',
      label: 'Project type',
      options: ([
    {
      id: 'd1266e40-1aa2-422b-9064-cce242303ad8',
      value: 'KITCHEN',
      label: 'Kitchen',
      color: 'orange',
      position: 0,
    },
    {
      id: '99478ca7-3dc1-45bd-9430-2a66795e2335',
      value: 'MAIN_FLOOR',
      label: 'Main floor',
      color: 'blue',
      position: 1,
    },
    {
      id: 'b3bd2493-e75b-44ce-8eca-b121992f1cf7',
      value: 'BASEMENT',
      label: 'Basement',
      color: 'purple',
      position: 2,
    },
    {
      id: '52ee7c2c-7d3c-4d12-b22c-c202a8d40489',
      value: 'SECONDARY_SUITE',
      label: 'Secondary suite',
      color: 'teal',
      position: 3,
    },
    {
      id: 'c1099f5f-66d4-446c-b584-c6073bd0d50a',
      value: 'BATHROOM',
      label: 'Bathroom',
      color: 'green',
      position: 4,
    },
    {
      id: '26d666d8-5210-413a-9e71-56936ee0d72d',
      value: 'OTHER',
      label: 'Other',
      color: 'gray',
      position: 5,
    }
      ]) as unknown as FieldMetadataComplexOption[],
    },

    {
      universalIdentifier: LEAD_BUDGET_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'budgetRange',
      label: 'Budget range',
      options: ([
    {
      id: 'b9a7de3d-d0ed-42a3-9957-375604441a41',
      value: 'UNDER_50K',
      label: 'Under $50k',
      color: 'gray',
      position: 0,
    },
    {
      id: '16fc8dbf-4ab8-4dbe-8643-436be32db20b',
      value: 'RANGE_50K_100K',
      label: '$50k–$100k',
      color: 'blue',
      position: 1,
    },
    {
      id: '9bae6483-5a67-446b-ad6d-2a63bf24be33',
      value: 'RANGE_100K_250K',
      label: '$100k–$250k',
      color: 'green',
      position: 2,
    },
    {
      id: '1ca4f4a1-be8a-4fe3-b999-71a6b053ff45',
      value: 'RANGE_250K_PLUS',
      label: '$250k+',
      color: 'purple',
      position: 3,
    }
      ]) as unknown as FieldMetadataComplexOption[],
    },

    {
      universalIdentifier: LEAD_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'notes',
      label: 'Notes',
      icon: 'IconFileText',
    },
      ],
});
