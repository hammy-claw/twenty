import { defineLogicFunction } from 'twenty-sdk';

type DraftFollowUpInput = {
  leadName: string;
  projectType?: string;
  budgetRange?: string;
  lastContact?: string;
  tone?: 'premium' | 'warm' | 'direct';
};

const handler = async (params: DraftFollowUpInput): Promise<{ subject: string; message: string }> => {
  const tone = params.tone ?? 'premium';
  const subject = `Follow up with ${params.leadName}`;
  const message = [
    `Tone: ${tone}`,
    `Lead: ${params.leadName}`,
    params.projectType ? `Project type: ${params.projectType}` : null,
    params.budgetRange ? `Budget range: ${params.budgetRange}` : null,
    params.lastContact ? `Last contact: ${params.lastContact}` : null,
    '',
    'Draft a concise, premium follow-up that confirms budget, timeline, scope, and decision-maker before booking the next call.',
  ].filter(Boolean).join('\n');

  return { subject, message };
};

export const DRAFT_FOLLOW_UP_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER = '6d6ae444-7d66-4c74-9ce9-075d5f1dad89';

export default defineLogicFunction({
  universalIdentifier: DRAFT_FOLLOW_UP_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER,
  name: 'draft-follow-up',
  description: 'Draft a premium renovation follow-up message for a lead',
  timeoutSeconds: 10,
  handler,
  isTool: true,
  toolInputSchema: {
    type: 'object',
    properties: {
      leadName: { type: 'string' },
      projectType: { type: 'string' },
      budgetRange: { type: 'string' },
      lastContact: { type: 'string' },
      tone: { type: 'string', enum: ['premium', 'warm', 'direct'] },
    },
    required: ['leadName'],
  },
});
