import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  ESTIMATE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_OBJECT_UNIVERSAL_IDENTIFIER,
  ESTIMATE_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_TOTAL_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_VALID_UNTIL_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export const ESTIMATES_VIEW_UNIVERSAL_IDENTIFIER = 'ce94d014-067f-4b5d-98bd-3a746dc73f7d';

export default defineView({
  universalIdentifier: ESTIMATES_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'All estimates',
  objectUniversalIdentifier: ESTIMATE_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconFileText',
  position: 1,
  fields: [
    { universalIdentifier: '5bb733e6-36bd-4fdb-aa9f-f4789e3c52f1', fieldMetadataUniversalIdentifier: ESTIMATE_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 220 },
    { universalIdentifier: 'e70d27e8-a484-4c4f-b139-0b1ffd4398ae', fieldMetadataUniversalIdentifier: ESTIMATE_STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 150 },
    { universalIdentifier: '34270684-9c1e-4df9-9726-61e42e6d1057', fieldMetadataUniversalIdentifier: ESTIMATE_TOTAL_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 140 },
    { universalIdentifier: 'b62f79be-7b4b-4660-b577-ea8883e0e0d8', fieldMetadataUniversalIdentifier: ESTIMATE_VALID_UNTIL_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true, size: 150 },
    { universalIdentifier: '13b03542-1d67-411d-98e1-1365d2c15d12', fieldMetadataUniversalIdentifier: ESTIMATE_PROJECT_FIELD_UNIVERSAL_IDENTIFIER, position: 4, isVisible: true, size: 180 },
  ],
});
