import { defineObject, FieldType } from 'twenty-sdk';
import {
  ESTIMATE_LINE_ITEM_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_ESTIMATE_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_QUANTITY_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_TEMPLATE_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_TOTAL_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_UNIT_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export {
  ESTIMATE_LINE_ITEM_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_ESTIMATE_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_QUANTITY_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_TEMPLATE_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_TOTAL_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_LINE_ITEM_UNIT_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
};

export default defineObject({
  universalIdentifier: ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'estimateLineItem',
  namePlural: 'estimateLineItems',
  labelSingular: 'Estimate line item',
  labelPlural: 'Estimate line items',
  description: 'The individual priced items that make up an estimate',
  icon: 'IconReceipt2',
  labelIdentifierFieldMetadataUniversalIdentifier: ESTIMATE_LINE_ITEM_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    { universalIdentifier: ESTIMATE_LINE_ITEM_NAME_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'name', label: 'Line item', icon: 'IconReceipt2' },

    { universalIdentifier: ESTIMATE_LINE_ITEM_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.SELECT, name: 'category', label: 'Category', options: [
      { id: 'f2f06b0c-bf86-45b8-9b6a-9a8b24e2a9c1', value: 'LABOR', label: 'Labor', color: 'blue', position: 0 },
      { id: 'f2f06b0c-bf86-45b8-9b6a-9a8b24e2a9c2', value: 'MATERIALS', label: 'Materials', color: 'green', position: 1 },
      { id: 'f2f06b0c-bf86-45b8-9b6a-9a8b24e2a9c3', value: 'ALLOWANCE', label: 'Allowance', color: 'yellow', position: 2 },
      { id: 'f2f06b0c-bf86-45b8-9b6a-9a8b24e2a9c4', value: 'SUBCONTRACT', label: 'Subcontract', color: 'purple', position: 3 },
      { id: 'f2f06b0c-bf86-45b8-9b6a-9a8b24e2a9c5', value: 'OTHER', label: 'Other', color: 'gray', position: 4 },
    ] },

    { universalIdentifier: ESTIMATE_LINE_ITEM_QUANTITY_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'quantity', label: 'Quantity', icon: 'Icon123' },

    { universalIdentifier: ESTIMATE_LINE_ITEM_UNIT_PRICE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'unitPrice', label: 'Unit price', icon: 'IconCurrencyDollar' },

    { universalIdentifier: ESTIMATE_LINE_ITEM_TOTAL_PRICE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.NUMBER, name: 'totalPrice', label: 'Total price', icon: 'IconCurrencyDollar' },

    { universalIdentifier: ESTIMATE_LINE_ITEM_NOTES_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'notes', label: 'Notes', icon: 'IconFileText' },
      ],
});
