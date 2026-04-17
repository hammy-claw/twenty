import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk';
import { ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER, ESTIMATE_LINE_ITEM_TEMPLATE_FIELD_UNIVERSAL_IDENTIFIER, ESTIMATE_TEMPLATE_OBJECT_UNIVERSAL_IDENTIFIER, ESTIMATE_TEMPLATE_LINE_ITEMS_FIELD_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: ESTIMATE_LINE_ITEM_TEMPLATE_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'template',
  label: 'Template',
  relationTargetObjectMetadataUniversalIdentifier: ESTIMATE_TEMPLATE_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ESTIMATE_TEMPLATE_LINE_ITEMS_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'templateId',
  },
});
