import { defineObject, FieldType } from 'twenty-sdk';
import {
  APPOINTMENT_LOCATION_FIELD_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_OBJECT_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_STARTS_AT_FIELD_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_SUBJECT_FIELD_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export {
  APPOINTMENT_LOCATION_FIELD_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_NOTES_FIELD_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_OBJECT_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_STARTS_AT_FIELD_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_SUBJECT_FIELD_UNIVERSAL_IDENTIFIER,
  APPOINTMENT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
};

export default defineObject({
  universalIdentifier: APPOINTMENT_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'appointment',
  namePlural: 'appointments',
  labelSingular: 'Appointment',
  labelPlural: 'Appointments',
  description: 'Consultations, site visits, and measurement appointments',
  icon: 'IconCalendarEvent',
  labelIdentifierFieldMetadataUniversalIdentifier: APPOINTMENT_SUBJECT_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    { universalIdentifier: APPOINTMENT_SUBJECT_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'subject', label: 'Subject', icon: 'IconCalendarEvent' },

    { universalIdentifier: APPOINTMENT_TYPE_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.SELECT, name: 'appointmentType', label: 'Type', options: [
      { id: '8b0e6f5f-0000-4000-8000-000000000001', value: 'CONSULTATION', label: 'Consultation', color: 'blue', position: 0 },
      { id: '8b0e6f5f-0000-4000-8000-000000000002', value: 'SITE_VISIT', label: 'Site visit', color: 'green', position: 1 },
      { id: '8b0e6f5f-0000-4000-8000-000000000003', value: 'MEASURE_UP', label: 'Measure-up', color: 'yellow', position: 2 },
      { id: '8b0e6f5f-0000-4000-8000-000000000004', value: 'FOLLOW_UP', label: 'Follow-up', color: 'purple', position: 3 },
    ] },

    { universalIdentifier: APPOINTMENT_STATUS_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.SELECT, name: 'status', label: 'Status', options: [
      { id: '8b0e6f5f-0000-4000-8000-000000000005', value: 'PLANNED', label: 'Planned', color: 'blue', position: 0 },
      { id: '8b0e6f5f-0000-4000-8000-000000000006', value: 'DONE', label: 'Done', color: 'green', position: 1 },
      { id: '8b0e6f5f-0000-4000-8000-000000000007', value: 'CANCELLED', label: 'Cancelled', color: 'red', position: 2 },
    ] },

    { universalIdentifier: APPOINTMENT_STARTS_AT_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.DATE_TIME, name: 'startsAt', label: 'Starts at', icon: 'IconClock' },

    { universalIdentifier: APPOINTMENT_LOCATION_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'location', label: 'Location', icon: 'IconMapPin' },

    { universalIdentifier: APPOINTMENT_NOTES_FIELD_UNIVERSAL_IDENTIFIER, type: FieldType.TEXT, name: 'notes', label: 'Notes', icon: 'IconFileText' },
      ],
});
