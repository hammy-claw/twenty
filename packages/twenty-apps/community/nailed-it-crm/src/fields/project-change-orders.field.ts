import { defineField, FieldType, RelationType } from 'twenty-sdk';
import { CHANGE_ORDER_OBJECT_UNIVERSAL_IDENTIFIER, CHANGE_ORDER_PROJECT_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_CHANGE_ORDERS_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: PROJECT_CHANGE_ORDERS_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'changeOrders',
  label: 'Change orders',
  relationTargetObjectMetadataUniversalIdentifier: CHANGE_ORDER_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: CHANGE_ORDER_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
