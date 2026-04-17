import { defineObject, FieldType } from 'twenty-sdk';
import { type FieldMetadataComplexOption } from 'twenty-shared/types';
import {
  CONTACT_ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
  CONTACT_COMPANY_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CONTACT_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
  CONTACT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CONTACT_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  CONTACT_OBJECT_UNIVERSAL_IDENTIFIER,
  CONTACT_PHONE_FIELD_UNIVERSAL_IDENTIFIER,
  CONTACT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineObject({
  universalIdentifier: CONTACT_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'contact',
  namePlural: 'contacts',
  labelSingular: 'Contact',
  labelPlural: 'Contacts',
  description: 'Household and company contacts linked to leads and projects',
  icon: 'IconUsers',
  labelIdentifierFieldMetadataUniversalIdentifier: CONTACT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: CONTACT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Contact name',
      icon: 'IconUser',
    },
    {
      universalIdentifier: CONTACT_COMPANY_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'companyName',
      label: 'Company / household',
      icon: 'IconBuilding',
    },
    {
      universalIdentifier: CONTACT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'contactType',
      label: 'Type',
      options: ([
        { id: '0e6e8e75-57f6-4f5f-9b42-9f07f2a3d001', value: 'HOMEOWNER', label: 'Homeowner', color: 'blue', position: 0 },
        { id: '0e6e8e75-57f6-4f5f-9b42-9f07f2a3d002', value: 'PARTNER', label: 'Partner', color: 'purple', position: 1 },
        { id: '0e6e8e75-57f6-4f5f-9b42-9f07f2a3d003', value: 'DESIGNER', label: 'Designer', color: 'green', position: 2 },
        { id: '0e6e8e75-57f6-4f5f-9b42-9f07f2a3d004', value: 'ARCHITECT', label: 'Architect', color: 'teal', position: 3 },
        { id: '0e6e8e75-57f6-4f5f-9b42-9f07f2a3d005', value: 'VENDOR', label: 'Vendor', color: 'orange', position: 4 },
        { id: '0e6e8e75-57f6-4f5f-9b42-9f07f2a3d006', value: 'OTHER', label: 'Other', color: 'gray', position: 5 },
      ]) as unknown as FieldMetadataComplexOption[],
    },
    {
      universalIdentifier: CONTACT_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.EMAILS,
      name: 'email',
      label: 'Email',
      icon: 'IconMail',
    },
    {
      universalIdentifier: CONTACT_PHONE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'phone',
      label: 'Phone',
      icon: 'IconPhone',
    },
    {
      universalIdentifier: CONTACT_ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'primaryAddress',
      label: 'Address',
      icon: 'IconMapPin',
    },
    {
      universalIdentifier: CONTACT_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'notes',
      label: 'Notes',
      icon: 'IconFileText',
    },
  ],
});
