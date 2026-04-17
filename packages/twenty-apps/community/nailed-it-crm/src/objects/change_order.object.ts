import { defineObject, FieldType } from 'twenty-sdk';
import { type FieldMetadataComplexOption } from 'twenty-shared/types';
import {
  CHANGE_ORDER_AMOUNT_FIELD_UNIVERSAL_IDENTIFIER,
  CHANGE_ORDER_APPROVED_AT_FIELD_UNIVERSAL_IDENTIFIER,
  CHANGE_ORDER_APPROVED_BY_FIELD_UNIVERSAL_IDENTIFIER,
  CHANGE_ORDER_APPROVAL_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  CHANGE_ORDER_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CHANGE_ORDER_OBJECT_UNIVERSAL_IDENTIFIER,
  CHANGE_ORDER_REASON_FIELD_UNIVERSAL_IDENTIFIER,
  CHANGE_ORDER_REQUESTED_BY_FIELD_UNIVERSAL_IDENTIFIER,
  CHANGE_ORDER_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineObject({
  universalIdentifier: CHANGE_ORDER_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'changeOrder',
  namePlural: 'changeOrders',
  labelSingular: 'Change order',
  labelPlural: 'Change orders',
  description: 'Scope deltas, approvals, and price changes',
  icon: 'IconRefresh',
  labelIdentifierFieldMetadataUniversalIdentifier: CHANGE_ORDER_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: CHANGE_ORDER_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Change order',
      icon: 'IconRefresh',
    },

    {
      universalIdentifier: CHANGE_ORDER_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      options: ([
    {
      id: '6ac687c6-576f-4169-ba85-016f038eaa42',
      value: 'DRAFT',
      label: 'Draft',
      color: 'gray',
      position: 0,
    },
    {
      id: '64d70e76-21a8-4a14-8f05-51f4b97a0787',
      value: 'PENDING_APPROVAL',
      label: 'Pending approval',
      color: 'blue',
      position: 1,
    },
    {
      id: 'a3bd2330-59af-4ce7-943b-e4700b792594',
      value: 'APPROVED',
      label: 'Approved',
      color: 'green',
      position: 2,
    },
    {
      id: '246259ba-f026-4bea-a4f4-fb425956adaa',
      value: 'REJECTED',
      label: 'Rejected',
      color: 'red',
      position: 3,
    }
      ]) as unknown as FieldMetadataComplexOption[],
    },

    {
      universalIdentifier: CHANGE_ORDER_AMOUNT_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'amount',
      label: 'Amount',
      icon: 'IconCurrencyDollar',
    },

    {
      universalIdentifier: CHANGE_ORDER_REASON_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'reason',
      label: 'Reason',
      icon: 'IconFileText',
    },

    {
      universalIdentifier: CHANGE_ORDER_REQUESTED_BY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'requestedBy',
      label: 'Requested by',
      icon: 'IconUser',
    },

    {
      universalIdentifier: CHANGE_ORDER_APPROVED_BY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'approvedBy',
      label: 'Approved by',
      icon: 'IconUserCheck',
    },

    {
      universalIdentifier: CHANGE_ORDER_APPROVED_AT_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.DATE_TIME,
      name: 'approvedAt',
      label: 'Approved at',
      icon: 'IconCalendarCheck',
    },

    {
      universalIdentifier: CHANGE_ORDER_APPROVAL_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'approvalNotes',
      label: 'Approval notes',
      icon: 'IconMessage',
    }
      ],
});
