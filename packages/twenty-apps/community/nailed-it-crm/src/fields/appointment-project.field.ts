import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk';
import { APPOINTMENT_PROJECT_FIELD_UNIVERSAL_IDENTIFIER, APPOINTMENT_OBJECT_UNIVERSAL_IDENTIFIER, PROJECT_APPOINTMENTS_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: APPOINTMENT_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: APPOINTMENT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'project',
  label: 'Project',
  relationTargetObjectMetadataUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROJECT_APPOINTMENTS_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'projectId',
  },
});
