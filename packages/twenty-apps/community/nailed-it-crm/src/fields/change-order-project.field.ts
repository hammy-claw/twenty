import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk';
import { CHANGE_ORDER_OBJECT_UNIVERSAL_IDENTIFIER, CHANGE_ORDER_PROJECT_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_CHANGE_ORDERS_FIELD_UNIVERSAL_IDENTIFIER, PROJECT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineField({
  universalIdentifier: CHANGE_ORDER_PROJECT_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: CHANGE_ORDER_OBJECT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'project',
  label: 'Project',
  relationTargetObjectMetadataUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROJECT_CHANGE_ORDERS_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'projectId',
  },
});
