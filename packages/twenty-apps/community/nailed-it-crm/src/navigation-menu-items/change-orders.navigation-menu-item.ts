import { defineNavigationMenuItem } from 'twenty-sdk';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { CHANGE_ORDER_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: '1d0b6f53-6001-4a66-a1b1-6f7f7e9a8a05',
  position: 5,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: CHANGE_ORDER_OBJECT_UNIVERSAL_IDENTIFIER,
});
