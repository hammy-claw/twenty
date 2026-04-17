import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  CHANGE_ORDER_AMOUNT_FIELD_UNIVERSAL_IDENTIFIER,
  CHANGE_ORDER_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CHANGE_ORDER_OBJECT_UNIVERSAL_IDENTIFIER,
  CHANGE_ORDER_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  CHANGE_ORDER_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export const CHANGE_ORDERS_VIEW_UNIVERSAL_IDENTIFIER = '6bfc0325-754d-45d7-be18-e3f79ba17919';

export default defineView({
  universalIdentifier: CHANGE_ORDERS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'All change orders',
  objectUniversalIdentifier: CHANGE_ORDER_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconRefresh',
  position: 1,
  fields: [
    { universalIdentifier: 'c1e19487-dd6b-4d6f-9fd9-9d84ba26d78d', fieldMetadataUniversalIdentifier: CHANGE_ORDER_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 220 },
    { universalIdentifier: 'a5aeaae1-1022-440f-a7b3-c7690609ea79', fieldMetadataUniversalIdentifier: CHANGE_ORDER_STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 150 },
    { universalIdentifier: '3008e0fd-f596-4aa4-b418-c021cefc330d', fieldMetadataUniversalIdentifier: CHANGE_ORDER_AMOUNT_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 140 },
    { universalIdentifier: '3d2c368a-7dd7-42b2-a209-9ced18f42ac3', fieldMetadataUniversalIdentifier: CHANGE_ORDER_PROJECT_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true, size: 180 },
  ],
});
