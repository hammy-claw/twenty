import { defineObject, FieldType } from 'twenty-sdk';
import {
  VENDOR_COMPANY_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  VENDOR_CONTACT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  VENDOR_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
  VENDOR_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  VENDOR_OBJECT_UNIVERSAL_IDENTIFIER,
  VENDOR_PHONE_FIELD_UNIVERSAL_IDENTIFIER,
  VENDOR_TRADE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineObject({
  universalIdentifier: VENDOR_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'vendor',
  namePlural: 'vendors',
  labelSingular: 'Vendor',
  labelPlural: 'Vendors',
  description: 'Subcontractors, suppliers, and trade partners',
  icon: 'IconTruck',
  labelIdentifierFieldMetadataUniversalIdentifier: VENDOR_COMPANY_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: VENDOR_COMPANY_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'companyName',
      label: 'Company name',
      icon: 'IconBuildingStore',
    },
    {
      universalIdentifier: VENDOR_CONTACT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'contactName',
      label: 'Contact name',
      icon: 'IconUser',
    },
    {
      universalIdentifier: VENDOR_TRADE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'trade',
      label: 'Trade',
      options: [
    {
      id: 'e5d2e66b-2972-4b69-ae62-fcc1788be4f0',
      value: 'GENERAL',
      label: 'General',
      color: 'gray',
      position: 0,
    },
    {
      id: '23d3c102-8d88-4b17-bdb3-5912635d683e',
      value: 'CABINETRY',
      label: 'Cabinetry',
      color: 'orange',
      position: 1,
    },
    {
      id: '9a19ac2c-68fe-4807-bd3b-b09312a54eab',
      value: 'PLUMBING',
      label: 'Plumbing',
      color: 'blue',
      position: 2,
    },
    {
      id: 'caf019a4-9495-4347-a459-2e3502128b6e',
      value: 'ELECTRICAL',
      label: 'Electrical',
      color: 'yellow',
      position: 3,
    },
    {
      id: '11578567-9873-48a3-9882-7ff5c23626dc',
      value: 'FINISHES',
      label: 'Finishes',
      color: 'green',
      position: 4,
    },
    {
      id: 'c78766c5-841c-4c68-9d08-43de59720662',
      value: 'OTHER',
      label: 'Other',
      color: 'purple',
      position: 5,
    }
      ],
    },
    {
      universalIdentifier: VENDOR_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.EMAILS,
      name: 'email',
      label: 'Email',
      icon: 'IconMail',
    },
    {
      universalIdentifier: VENDOR_PHONE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'phone',
      label: 'Phone',
      icon: 'IconPhone',
    },
    {
      universalIdentifier: VENDOR_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'notes',
      label: 'Notes',
      icon: 'IconFileText',
    },
  ],
});
