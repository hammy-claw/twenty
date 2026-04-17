import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import { APPOINTMENT_OBJECT_UNIVERSAL_IDENTIFIER, APPOINTMENT_SUBJECT_FIELD_UNIVERSAL_IDENTIFIER, APPOINTMENT_TYPE_FIELD_UNIVERSAL_IDENTIFIER, APPOINTMENT_STATUS_FIELD_UNIVERSAL_IDENTIFIER, APPOINTMENT_STARTS_AT_FIELD_UNIVERSAL_IDENTIFIER } from 'src/objects/appointment.object';

export default defineView({
  universalIdentifier: '25a746a3-d495-4941-accb-51303594c9c7',
  name: 'Appointments',
  objectUniversalIdentifier: APPOINTMENT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconCalendarEvent',
  position: 1,
  fields: [
    { universalIdentifier: 'c2ee3fb8-7b7f-4e5e-8b0d-1e0f7f600010', fieldMetadataUniversalIdentifier: APPOINTMENT_SUBJECT_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true, size: 240 },
    { universalIdentifier: 'c2ee3fb8-7b7f-4e5e-8b0d-1e0f7f600011', fieldMetadataUniversalIdentifier: APPOINTMENT_TYPE_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true, size: 150 },
    { universalIdentifier: 'c2ee3fb8-7b7f-4e5e-8b0d-1e0f7f600012', fieldMetadataUniversalIdentifier: APPOINTMENT_STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true, size: 140 },
    { universalIdentifier: 'c2ee3fb8-7b7f-4e5e-8b0d-1e0f7f600013', fieldMetadataUniversalIdentifier: APPOINTMENT_STARTS_AT_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true, size: 180 },
  ],
});
