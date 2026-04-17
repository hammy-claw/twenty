import { defineObject, FieldType } from 'twenty-sdk';
import { type FieldMetadataComplexOption } from 'twenty-shared/types';
import {
  ESTIMATE_TEMPLATE_DESCRIPTION_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_TEMPLATE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_TEMPLATE_OBJECT_UNIVERSAL_IDENTIFIER,
  ESTIMATE_TEMPLATE_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_TEMPLATE_TRADE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

const estimateTemplateStatusOptions = [
  { id: 'b4f2d04b-62c9-4c7e-93f7-8d31f08e5c41', value: 'DRAFT', label: 'Draft', color: 'gray', position: 0 },
  { id: 'e4a0ae79-2f7f-4db8-a7ce-1e9d32de3791', value: 'ACTIVE', label: 'Active', color: 'green', position: 1 },
  { id: '7a4d67ae-0d45-4dc8-8e0c-7bbf0e9d0303', value: 'ARCHIVED', label: 'Archived', color: 'yellow', position: 2 },
] as FieldMetadataComplexOption[];

const estimateTemplateTradeOptions = [
  { id: 'bceefde1-0bd3-4e64-bd6a-3fd8c5aeb611', value: 'KITCHEN', label: 'Kitchen', color: 'orange', position: 0 },
  { id: '0fb8a9fb-6d61-4c45-9c68-1b7d4b4c2f13', value: 'MAIN_FLOOR', label: 'Main floor', color: 'blue', position: 1 },
  { id: 'a0f4bf77-4540-4c88-8cb2-6d2c68d8c7c4', value: 'BASEMENT', label: 'Basement', color: 'purple', position: 2 },
  { id: 'f3f2a3b7-4c2d-4c7e-b3f7-961c8b7d9db8', value: 'SECONDARY_SUITE', label: 'Secondary suite', color: 'teal', position: 3 },
  { id: '5f6c53d8-2f11-4e63-8f4c-2fa1ef1c7c99', value: 'BATHROOM', label: 'Bathroom', color: 'green', position: 4 },
  { id: 'f4128c1d-71a5-4a39-9952-6b4f9f0d3b17', value: 'OTHER', label: 'Other', color: 'gray', position: 5 },
] as FieldMetadataComplexOption[];

export default defineObject({
  universalIdentifier: ESTIMATE_TEMPLATE_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'estimateTemplate',
  namePlural: 'estimateTemplates',
  labelSingular: 'Estimate template',
  labelPlural: 'Estimate templates',
  description: 'Reusable quote structure for common renovation scopes',
  icon: 'IconTemplate',
  labelIdentifierFieldMetadataUniversalIdentifier: ESTIMATE_TEMPLATE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    { universalIdentifier: ESTIMATE_TEMPLATE_NAME_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'name', label: 'Template', icon: 'IconTemplate' },

    { universalIdentifier: ESTIMATE_TEMPLATE_STATUS_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.SELECT, name: 'status', label: 'Status', options: estimateTemplateStatusOptions },

    { universalIdentifier: ESTIMATE_TEMPLATE_TRADE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.SELECT, name: 'trade', label: 'Trade', options: estimateTemplateTradeOptions },

    { universalIdentifier: ESTIMATE_TEMPLATE_DESCRIPTION_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'description', label: 'Description', icon: 'IconFileText' },
  ],
});
