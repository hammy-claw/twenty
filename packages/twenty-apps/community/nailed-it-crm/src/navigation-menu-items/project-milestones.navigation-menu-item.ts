import { defineNavigationMenuItem } from 'twenty-sdk';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { PROJECT_MILESTONE_OBJECT_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: 'd7f08dac-398b-461e-8cac-178c2186d167',
  position: 12,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: PROJECT_MILESTONE_OBJECT_UNIVERSAL_IDENTIFIER,
});