import { defineLogicFunction } from 'twenty-sdk';

type ProjectScopeCheckInput = {
  approvedScope: string;
  requestedExtras?: string;
  missingSelections?: string;
};

const handler = async (params: ProjectScopeCheckInput): Promise<{ flags: string[]; recommendation: string }> => {
  const flags = [
    !params.approvedScope ? 'No approved scope provided' : null,
    params.requestedExtras ? 'Extras requested' : null,
    params.missingSelections ? 'Selections still outstanding' : null,
  ].filter(Boolean) as string[];

  const recommendation = flags.length > 0
    ? 'Create a change order or clarify the approved quote before work proceeds.'
    : 'Scope looks clean. Proceed with the approved plan.';

  return { flags, recommendation };
};

export const PROJECT_SCOPE_CHECK_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER = '25d0e637-889d-4032-a120-729648024e54';

export default defineLogicFunction({
  universalIdentifier: PROJECT_SCOPE_CHECK_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER,
  name: 'project-scope-check',
  description: 'Check whether requested work belongs in the base quote or should become a change order',
  timeoutSeconds: 10,
  handler,
  isTool: true,
  toolInputSchema: {
    type: 'object',
    properties: {
      approvedScope: { type: 'string' },
      requestedExtras: { type: 'string' },
      missingSelections: { type: 'string' },
    },
    required: ['approvedScope'],
  },
});
