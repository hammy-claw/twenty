import { defineNavigationMenuItem } from 'twenty-sdk';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/objects/estimate-line-item.object';

export default defineNavigationMenuItem({
  universalIdentifier: 'e350979f-132d-4846-bc40-5cc010a4a8ea',
  position: 8,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: ESTIMATE_LINE_ITEM_OBJECT_UNIVERSAL_IDENTIFIER,
});
