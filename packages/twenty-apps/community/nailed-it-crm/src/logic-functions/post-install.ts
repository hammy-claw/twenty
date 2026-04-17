import { definePostInstallLogicFunction } from 'twenty-sdk';

const handler = async (): Promise<void> => {
  console.log('Nailed It CRM installed. Next step: connect lead sources, add estimate templates, and wire client messaging.');
};

export const POST_INSTALL_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER = '4967af41-bfe9-4ffb-95ed-757d2e414417';

export default definePostInstallLogicFunction({
  universalIdentifier: POST_INSTALL_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER,
  name: 'post-install',
  description: 'Post install setup note for the Nailed It CRM app',
  timeoutSeconds: 30,
  shouldRunOnVersionUpgrade: false,
  shouldRunSynchronously: true,
  handler,
});
