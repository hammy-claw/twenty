import { defineNavigationMenuItem } from 'twenty-sdk';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { APPOINTMENT_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/objects/appointment.object';

export default defineNavigationMenuItem({
  universalIdentifier: '3ab3b3d4-65ff-4e9f-9a92-cecdc436255e',
  position: 9,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: APPOINTMENT_OBJECT_UNIVERSAL_IDENTIFIER,
});
