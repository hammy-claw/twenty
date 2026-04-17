import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import { ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER, ESTIMATE_LINE_ITEM_NAME_FIELD_UNIVERSAL_IDENTIFIER, ESTIMATE_LINE_ITEM_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER, ESTIMATE_LINE_ITEM_TOTAL_PRICE_FIELD_UNIVERSAL_IDENTIFIER } from 'src/objects/estimate-line-item.object';

export default defineView({
  universalIdentifier: '6a6d3519-c27d-44e8-81d3-9cac46273443',
  name: 'Estimate line items',
  objectUniversalIdentifier: ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconReceipt2',
  position: 1,
  fields: [
    { universalIdentifier: 'c2ee3fb8-7b7f-4e5e-8b0d-1e0f7f600001', fieldMetadataUniversalIdentifier: ESTIMATE_LINE_ITEM_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 240 },
    { universalIdentifier: 'c2ee3fb8-7b7f-4e5e-8b0d-1e0f7f600002', fieldMetadataUniversalIdentifier: ESTIMATE_LINE_ITEM_CATEGORY_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 150 },
    { universalIdentifier: 'c2ee3fb8-7b7f-4e5e-8b0d-1e0f7f600003', fieldMetadataUniversalIdentifier: ESTIMATE_LINE_ITEM_TOTAL_PRICE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 140 },
  ],
});
