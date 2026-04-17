import { defineObject, FieldType } from 'twenty-sdk';
import { type FieldMetadataComplexOption } from 'twenty-shared/types';
import {
  INVOICE_AMOUNT_FIELD_UNIVERSAL_IDENTIFIER,
  INVOICE_DUE_DATE_FIELD_UNIVERSAL_IDENTIFIER,
  INVOICE_ISSUED_AT_FIELD_UNIVERSAL_IDENTIFIER,
  INVOICE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  INVOICE_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  INVOICE_NUMBER_FIELD_UNIVERSAL_IDENTIFIER,
  INVOICE_OBJECT_UNIVERSAL_IDENTIFIER,
  INVOICE_PAID_AT_FIELD_UNIVERSAL_IDENTIFIER,
  INVOICE_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineObject({
  universalIdentifier: INVOICE_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'invoice',
  namePlural: 'invoices',
  labelSingular: 'Invoice',
  labelPlural: 'Invoices',
  description: 'Client invoices tied to renovation projects',
  icon: 'IconReceipt2',
  labelIdentifierFieldMetadataUniversalIdentifier: INVOICE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: INVOICE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Invoice name',
      icon: 'IconReceipt2',
    },
    {
      universalIdentifier: INVOICE_NUMBER_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'number',
      label: 'Invoice number',
      icon: 'IconHash',
    },
    {
      universalIdentifier: INVOICE_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      options: ([
        { id: 'c3b12bc8-ec1f-4d8d-8d71-1f0fdb6a7001', value: 'DRAFT', label: 'Draft', color: 'gray', position: 0 },
        { id: 'c3b12bc8-ec1f-4d8d-8d71-1f0fdb6a7002', value: 'SENT', label: 'Sent', color: 'blue', position: 1 },
        { id: 'c3b12bc8-ec1f-4d8d-8d71-1f0fdb6a7003', value: 'PARTIALLY_PAID', label: 'Partially paid', color: 'yellow', position: 2 },
        { id: 'c3b12bc8-ec1f-4d8d-8d71-1f0fdb6a7004', value: 'PAID', label: 'Paid', color: 'green', position: 3 },
        { id: 'c3b12bc8-ec1f-4d8d-8d71-1f0fdb6a7005', value: 'OVERDUE', label: 'Overdue', color: 'red', position: 4 },
      ]) as unknown as FieldMetadataComplexOption[],
    },
    {
      universalIdentifier: INVOICE_AMOUNT_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'amount',
      label: 'Amount',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: INVOICE_ISSUED_AT_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.DATE,
      name: 'issuedAt',
      label: 'Issued at',
      icon: 'IconCalendar',
    },
    {
      universalIdentifier: INVOICE_DUE_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.DATE,
      name: 'dueDate',
      label: 'Due date',
      icon: 'IconCalendar',
    },
    {
      universalIdentifier: INVOICE_PAID_AT_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.DATE_TIME,
      name: 'paidAt',
      label: 'Paid at',
      icon: 'IconCircleCheck',
    },
    {
      universalIdentifier: INVOICE_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'notes',
      label: 'Notes',
      icon: 'IconFileText',
    },
  ],
});
