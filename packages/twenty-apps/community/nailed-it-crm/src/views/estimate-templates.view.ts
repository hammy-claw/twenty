import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  ESTIMATE_TEMPLATE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_TEMPLATE_OBJECT_UNIVERSAL_IDENTIFIER,
  ESTIMATE_TEMPLATE_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  ESTIMATE_TEMPLATE_TRADE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export const ESTIMATE_TEMPLATES_VIEW_UNIVERSAL_IDENTIFIER = 'c2e6b3cc-d38c-4ef8-b7fb-1655b7fe124c';

export default defineView({
  universalIdentifier: ESTIMATE_TEMPLATES_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'All estimate templates',
  objectUniversalIdentifier: ESTIMATE_TEMPLATE_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconTemplate',
  position: 1,
  fields: [
    { universalIdentifier: 'f3b775f8-6ee6-4ce9-a6c8-97b6a3d6fe01', fieldMetadataUniversalIdentifier: ESTIMATE_TEMPLATE_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 220 },
    { universalIdentifier: 'f3b775f8-6ee6-4ce9-a6c8-97b6a3d6fe02', fieldMetadataUniversalIdentifier: ESTIMATE_TEMPLATE_STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 150 },
    { universalIdentifier: 'f3b775f8-6ee6-4ce9-a6c8-97b6a3d6fe03', fieldMetadataUniversalIdentifier: ESTIMATE_TEMPLATE_TRADE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 150 },
  ],
});