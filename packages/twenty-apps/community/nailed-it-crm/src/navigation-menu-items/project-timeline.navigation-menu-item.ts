import { defineNavigationMenuItem } from 'twenty-sdk';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { PROJECT_TIMELINE_ENTRY_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: '1766dc88-cebf-433a-a9cb-4729eb1f9c2c',
  position: 11,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: PROJECT_TIMELINE_ENTRY_OBJECT_UNIVERSAL_IDENTIFIER,
});