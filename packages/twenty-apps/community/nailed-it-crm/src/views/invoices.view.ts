import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  INVOICE_AMOUNT_FIELD_UNIVERSAL_IDENTIFIER,
  INVOICE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  INVOICE_OBJECT_UNIVERSAL_IDENTIFIER,
  INVOICE_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export const INVOICES_VIEW_UNIVERSAL_IDENTIFIER = '6db6b795-eeb7-49ed-a3ee-85a09913de70';

export default defineView({
  universalIdentifier: INVOICES_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'All invoices',
  objectUniversalIdentifier: INVOICE_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconReceipt2',
  position: 4,
  fields: [
    { universalIdentifier: 'e8f87729-13e6-40c6-8b3d-540b6f02e801', fieldMetadataUniversalIdentifier: INVOICE_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 220 },
    { universalIdentifier: 'f7642bfb-1c6a-410d-a469-34cb3b5b3b01', fieldMetadataUniversalIdentifier: INVOICE_STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 160 },
    { universalIdentifier: 'a4b8bc8c-1c88-4e1f-87f6-6bb8de3f8cc1', fieldMetadataUniversalIdentifier: INVOICE_AMOUNT_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 180 },
  ],
});
