import { defineNavigationMenuItem } from 'twenty-sdk';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { ESTIMATE_TEMPLATE_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: '5b62a678-e6db-4ffa-97da-b63e039e07fe',
  position: 10,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: ESTIMATE_TEMPLATE_OBJECT_UNIVERSAL_IDENTIFIER,
});