import { defineLogicFunction } from 'twenty-sdk';

type SummarizeProjectInput = {
  projectName: string;
  currentStage?: string;
  scopeSummary?: string;
  openRisks?: string;
  nextActions?: string;
};

const handler = async (params: SummarizeProjectInput): Promise<{ summary: string; nextSteps: string[] }> => {
  const summaryParts = [
    `Project: ${params.projectName}`,
    params.currentStage ? `Stage: ${params.currentStage}` : null,
    params.scopeSummary ? `Scope: ${params.scopeSummary}` : null,
    params.openRisks ? `Risks: ${params.openRisks}` : null,
  ].filter(Boolean);

  const nextSteps = params.nextActions
    ? params.nextActions.split(';').map((item) => item.trim()).filter(Boolean)
    : [
        'Confirm current scope and any exclusions',
        'Check selections that can still move the budget',
        'Identify the next trade or procurement dependency',
      ];

  return {
    summary: summaryParts.join(' | '),
    nextSteps,
  };
};

export const SUMMARIZE_PROJECT_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER = '948d661d-a0c2-4ddf-b14e-eff579668fcf';

export default defineLogicFunction({
  universalIdentifier: SUMMARIZE_PROJECT_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER,
  name: 'summarize-project',
  description: 'Summarize a renovation project into a concise operational brief',
  timeoutSeconds: 10,
  handler,
  isTool: true,
  toolInputSchema: {
    type: 'object',
    properties: {
      projectName: { type: 'string' },
      currentStage: { type: 'string' },
      scopeSummary: { type: 'string' },
      openRisks: { type: 'string' },
      nextActions: { type: 'string' },
    },
    required: ['projectName'],
  },
});
