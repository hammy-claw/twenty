import { defineField, FieldType, RelationType } from 'twenty-sdk';
import { APPOINTMENT_OBJECT_UNIVERSAL_IDENTIFIER, APPOINTMENT_PROJECT_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_APPOINTMENTS_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: PROJECT_APPOINTMENTS_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'appointments',
  label: 'Appointments',
  relationTargetObjectMetadataUniversalIdentifier: APPOINTMENT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: APPOINTMENT_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
