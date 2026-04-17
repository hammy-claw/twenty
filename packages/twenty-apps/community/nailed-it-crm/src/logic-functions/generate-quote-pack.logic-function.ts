import { defineLogicFunction } from 'twenty-sdk';

type GenerateQuotePackInput = {
  projectType?: 'KITCHEN' | 'MAIN_FLOOR' | 'BASEMENT' | 'SECONDARY_SUITE' | 'BATHROOM' | 'OTHER';
  approvedScope: string;
  exclusions?: string;
  allowances?: string;
  tradeConstraints?: string;
};

const pickDefaultSections = (projectType?: GenerateQuotePackInput['projectType']) => {
  switch (projectType) {
    case 'KITCHEN':
      return ['demo', 'framing', 'electrical', 'plumbing', 'cabinetry', 'countertops', 'paint', 'cleanup'];
    case 'MAIN_FLOOR':
      return ['demo', 'subfloor', 'flooring', 'trim', 'paint', 'lighting', 'final-clean'];
    case 'BASEMENT':
      return ['demo', 'framing', 'insulation', 'drywall', 'electrical', 'plumbing', 'flooring', 'final-clean'];
    case 'SECONDARY_SUITE':
      return ['demo', 'framing', 'fire-safety', 'electrical', 'plumbing', 'kitchenette', 'bathroom', 'final-clean'];
    case 'BATHROOM':
      return ['demo', 'framing', 'plumbing', 'waterproofing', 'tile', 'fixtures', 'glass', 'final-clean'];
    default:
      return ['demo', 'site-protection', 'rough-in', 'finishes', 'punch-list', 'final-clean'];
  }
};

const handler = async (params: GenerateQuotePackInput): Promise<{
  scopeSummary: string;
  baseSections: string[];
  questions: string[];
  exclusions: string[];
}> => {
  const baseSections = pickDefaultSections(params.projectType);
  const questions = [
    !params.approvedScope ? 'What exact work is approved?' : null,
    params.allowances ? 'Which allowances still need actual selections?' : null,
    params.tradeConstraints ? 'Are there access, timing, or trade-sequencing constraints?' : null,
    'What is explicitly excluded from the quote?',
    'Which items need change-order protection?',
  ].filter(Boolean) as string[];

  const exclusions = params.exclusions
    ? params.exclusions.split(';').map((item) => item.trim()).filter(Boolean)
    : ['Anything not explicitly listed in the approved quote'];

  return {
    scopeSummary: params.approvedScope,
    baseSections,
    questions,
    exclusions,
  };
};

export const GENERATE_QUOTE_PACK_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER = '7af2b3d1-12d9-4ce9-95a7-ec1dd1d07f0a';

export default defineLogicFunction({
  universalIdentifier: GENERATE_QUOTE_PACK_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER,
  name: 'generate-quote-pack',
  description: 'Draft a renovation quote pack from approved scope and project type',
  timeoutSeconds: 10,
  handler,
  isTool: true,
  toolInputSchema: {
    type: 'object',
    properties: {
      projectType: { type: 'string', enum: ['KITCHEN', 'MAIN_FLOOR', 'BASEMENT', 'SECONDARY_SUITE', 'BATHROOM', 'OTHER'] },
      approvedScope: { type: 'string' },
      exclusions: { type: 'string' },
      allowances: { type: 'string' },
      tradeConstraints: { type: 'string' },
    },
    required: ['approvedScope'],
  },
});
