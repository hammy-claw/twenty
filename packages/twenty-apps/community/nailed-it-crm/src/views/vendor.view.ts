import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  VENDOR_COMPANY_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  VENDOR_OBJECT_UNIVERSAL_IDENTIFIER,
  VENDOR_TRADE_FIELD_UNIVERSAL_IDENTIFIER,
  VENDOR_CONTACT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export const VENDORS_VIEW_UNIVERSAL_IDENTIFIER = '2c929548-6267-4db1-bb5c-2db8aa66351f';

export default defineView({
  universalIdentifier: VENDORS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'All vendors',
  objectUniversalIdentifier: VENDOR_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconTruck',
  position: 1,
  fields: [
    { universalIdentifier: 'a670ca6c-1661-481e-8fc5-b3fa1523e553', fieldMetadataUniversalIdentifier: VENDOR_COMPANY_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 220 },
    { universalIdentifier: 'cf2f5c0e-45d8-4aee-827e-0b0806c34ec1', fieldMetadataUniversalIdentifier: VENDOR_CONTACT_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 180 },
    { universalIdentifier: '4b98607d-f11a-4248-93a2-6f96349bdfee', fieldMetadataUniversalIdentifier: VENDOR_TRADE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 150 },
  ],
});
