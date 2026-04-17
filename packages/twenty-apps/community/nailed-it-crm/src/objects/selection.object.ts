import { defineObject, FieldType } from 'twenty-sdk';
import { type FieldMetadataComplexOption } from 'twenty-shared/types';
import {
  SELECTION_ALLOWANCE_AMOUNT_FIELD_UNIVERSAL_IDENTIFIER,
  SELECTION_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER,
  SELECTION_DUE_DATE_FIELD_UNIVERSAL_IDENTIFIER,
  SELECTION_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  SELECTION_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  SELECTION_OBJECT_UNIVERSAL_IDENTIFIER,
  SELECTION_SELECTED_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
  SELECTION_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  SELECTION_VENDOR_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineObject({
  universalIdentifier: SELECTION_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'selection',
  namePlural: 'selections',
  labelSingular: 'Selection',
  labelPlural: 'Selections',
  description: 'Client selections, allowances, and product decisions',
  icon: 'IconChecklist',
  labelIdentifierFieldMetadataUniversalIdentifier: SELECTION_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: SELECTION_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Selection',
      icon: 'IconChecklist',
    },

    {
      universalIdentifier: SELECTION_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'category',
      label: 'Category',
      options: ([
    {
      id: '7e9c7827-61f8-4baf-926b-1033b024ec08',
      value: 'FINISHES',
      label: 'Finishes',
      color: 'orange',
      position: 0,
    },
    {
      id: '986d9eba-90ce-436a-969b-593efe58eed5',
      value: 'FIXTURES',
      label: 'Fixtures',
      color: 'blue',
      position: 1,
    },
    {
      id: 'd0fc8f12-b277-4134-9399-58bc2955adf8',
      value: 'APPLIANCES',
      label: 'Appliances',
      color: 'green',
      position: 2,
    },
    {
      id: '9f29a8eb-89e6-4c9d-848e-2d0c2830d585',
      value: 'MATERIALS',
      label: 'Materials',
      color: 'purple',
      position: 3,
    },
    {
      id: '2d5172d2-fa6f-4c54-9b80-87c13edff042',
      value: 'OTHER',
      label: 'Other',
      color: 'gray',
      position: 4,
    }
      ]) as unknown as FieldMetadataComplexOption[],
    },

    {
      universalIdentifier: SELECTION_VENDOR_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'vendor',
      label: 'Vendor',
      icon: 'IconBuildingStore',
    },

    {
      universalIdentifier: SELECTION_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      options: ([
    {
      id: '1f3be6a8-2b44-4a0f-b8cb-2f811c017463',
      value: 'PENDING',
      label: 'Pending',
      color: 'gray',
      position: 0,
    },
    {
      id: '72fe1315-b983-4bc0-bc72-847b44bae7a8',
      value: 'APPROVED',
      label: 'Approved',
      color: 'green',
      position: 1,
    },
    {
      id: '01c83b15-d400-4ded-9667-daab40b2b747',
      value: 'ORDERED',
      label: 'Ordered',
      color: 'blue',
      position: 2,
    },
    {
      id: '792ec97c-2ac5-408b-a2ee-d886afd811a2',
      value: 'BACKORDERED',
      label: 'Backordered',
      color: 'yellow',
      position: 3,
    },
    {
      id: 'e949246b-3674-4476-8971-6659c92a3bd9',
      value: 'INSTALLED',
      label: 'Installed',
      color: 'teal',
      position: 4,
    }
      ]) as unknown as FieldMetadataComplexOption[],
    },

    {
      universalIdentifier: SELECTION_ALLOWANCE_AMOUNT_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'allowanceAmount',
      label: 'Allowance amount',
      icon: 'IconCurrencyDollar',
    },

    {
      universalIdentifier: SELECTION_SELECTED_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'selectedPrice',
      label: 'Selected price',
      icon: 'IconCurrencyDollar',
    },

    {
      universalIdentifier: SELECTION_DUE_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.DATE,
      name: 'dueDate',
      label: 'Due date',
      icon: 'IconCalendar',
    },

    {
      universalIdentifier: SELECTION_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'notes',
      label: 'Notes',
      icon: 'IconFileText',
    },
      ],
});
