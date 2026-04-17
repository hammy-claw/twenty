import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk';
import { ESTIMATE_OBJECT_UNIVERSAL_IDENTIFIER, ESTIMATE_LINE_ITEMS_FIELD_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';
import { ESTIMATE_LINE_ITEM_ESTIMATE_FIELD_UNIVERSAL_IDENTIFIER, ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/objects/estimate-line-item.object';

export default defineField({
  universalIdentifier: ESTIMATE_LINE_ITEM_ESTIMATE_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'estimate',
  label: 'Estimate',
  relationTargetObjectMetadataUniversalIdentifier: ESTIMATE_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ESTIMATE_LINE_ITEMS_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'estimateId',
  },
});
