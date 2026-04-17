import { defineField, FieldType, RelationType } from 'twenty-sdk';
import { ESTIMATE_TEMPLATE_OBJECT_UNIVERSAL_IDENTIFIER, ESTIMATE_TEMPLATE_LINE_ITEMS_FIELD_UNIVERSAL_IDENTIFIER, ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER, ESTIMATE_LINE_ITEM_TEMPLATE_FIELD_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: ESTIMATE_TEMPLATE_LINE_ITEMS_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: ESTIMATE_TEMPLATE_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'lineItems',
  label: 'Line items',
  relationTargetObjectMetadataUniversalIdentifier: ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ESTIMATE_LINE_ITEM_TEMPLATE_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
