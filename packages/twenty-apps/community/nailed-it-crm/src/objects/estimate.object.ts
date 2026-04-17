import { defineObject, FieldType } from 'twenty-sdk';
import {
  ESTIMATE_DEPOSIT_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_OBJECT_UNIVERSAL_IDENTIFIER,
  ESTIMATE_SCOPE_SUMMARY_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_INCLUSIONS_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_EXCLUSIONS_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_ASSUMPTIONS_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_SUBTOTAL_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_TAX_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_TOTAL_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_VALID_UNTIL_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_VERSION_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_ESTIMATE_APPROVED_AT_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_ESTIMATE_APPROVED_BY_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_ESTIMATE_APPROVAL_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';
import {
} from 'src/objects/estimate-line-item.object';

export default defineObject({
  universalIdentifier: ESTIMATE_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'estimate',
  namePlural: 'estimates',
  labelSingular: 'Estimate',
  labelPlural: 'Estimates',
  description: 'Quotes, budgets, and proposal versions',
  icon: 'IconFileText',
  labelIdentifierFieldMetadataUniversalIdentifier: ESTIMATE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: ESTIMATE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Estimate name',
      icon: 'IconFileText',
    },

    {
      universalIdentifier: ESTIMATE_VERSION_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'version',
      label: 'Version',
      icon: 'IconHash',
    },

    {
      universalIdentifier: ESTIMATE_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      options: [
    {
      id: '3d82dd73-9419-4b8c-bb8c-0459e35367e3',
      value: 'DRAFT',
      label: 'Draft',
      color: 'gray',
      position: 0,
    },
    {
      id: 'dcef9d33-55b6-4ee8-bffb-6fb9e22b3549',
      value: 'SENT',
      label: 'Sent',
      color: 'blue',
      position: 1,
    },
    {
      id: 'd99714f1-04d0-475d-ab08-b1608633305f',
      value: 'APPROVED',
      label: 'Approved',
      color: 'green',
      position: 2,
    },
    {
      id: '6c1f85bc-a0a4-4d5f-856a-94e67b451a13',
      value: 'REJECTED',
      label: 'Rejected',
      color: 'red',
      position: 3,
    },
    {
      id: '64a041d1-6cbe-45a3-b7ce-85cf15f1f706',
      value: 'EXPIRED',
      label: 'Expired',
      color: 'yellow',
      position: 4,
    }
      ],
    },

    {
      universalIdentifier: ESTIMATE_SUBTOTAL_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'subtotal',
      label: 'Subtotal',
      icon: 'IconCalculator',
    },

    {
      universalIdentifier: ESTIMATE_TAX_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'tax',
      label: 'Tax',
      icon: 'IconCalculator',
    },

    {
      universalIdentifier: ESTIMATE_TOTAL_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'total',
      label: 'Total',
      icon: 'IconCalculator',
    },

    {
      universalIdentifier: ESTIMATE_DEPOSIT_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'deposit',
      label: 'Deposit',
      icon: 'IconCircleCheck',
    },

    {
      universalIdentifier: ESTIMATE_VALID_UNTIL_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.DATE,
      name: 'validUntil',
      label: 'Valid until',
      icon: 'IconCalendar',
    },

    {
      universalIdentifier: ESTIMATE_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'notes',
      label: 'Notes',
      icon: 'IconFileText',
    },

    {
      universalIdentifier: ESTIMATE_SCOPE_SUMMARY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'scopeSummary',
      label: 'Scope summary',
      icon: 'IconListDetails',
    },

    {
      universalIdentifier: ESTIMATE_INCLUSIONS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'inclusions',
      label: 'Inclusions',
      icon: 'IconBadgeCheck',
    },

    {
      universalIdentifier: ESTIMATE_EXCLUSIONS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'exclusions',
      label: 'Exclusions',
      icon: 'IconX',
    },

    {
      universalIdentifier: ESTIMATE_ASSUMPTIONS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'assumptions',
      label: 'Assumptions',
      icon: 'IconRosetteDiscountCheck',
    },

    {
      universalIdentifier: PROJECT_ESTIMATE_APPROVED_BY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'approvedBy',
      label: 'Approved by',
      icon: 'IconUserCheck',
    },

    {
      universalIdentifier: PROJECT_ESTIMATE_APPROVED_AT_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.DATE_TIME,
      name: 'approvedAt',
      label: 'Approved at',
      icon: 'IconCalendarCheck',
    },

    {
      universalIdentifier: PROJECT_ESTIMATE_APPROVAL_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'approvalNotes',
      label: 'Approval notes',
      icon: 'IconMessage',
    },
  ],
});
