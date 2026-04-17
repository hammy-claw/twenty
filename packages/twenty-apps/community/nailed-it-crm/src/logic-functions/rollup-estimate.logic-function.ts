import { defineLogicFunction } from 'twenty-sdk';

type EstimateLineItemInput = {
  name: string;
  category?: 'LABOR' | 'MATERIALS' | 'ALLOWANCE' | 'SUBCONTRACT' | 'OTHER';
  quantity?: number;
  unitPrice?: number;
  totalPrice?: number;
};

type RollupEstimateInput = {
  lineItems: EstimateLineItemInput[];
  taxRate?: number;
  depositPercent?: number;
};

const toNumber = (value: unknown): number => {
  const n = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(n) ? n : 0;
};

const handler = async (params: RollupEstimateInput): Promise<{
  subtotal: number;
  tax: number;
  total: number;
  deposit: number;
  categoryTotals: Record<string, number>;
}> => {
  const categoryTotals: Record<string, number> = {};

  const subtotal = (params.lineItems ?? []).reduce((sum, item) => {
    const explicitTotal = toNumber(item.totalPrice);
    const computedTotal = explicitTotal || toNumber(item.quantity) * toNumber(item.unitPrice);
    const category = item.category ?? 'OTHER';
    categoryTotals[category] = (categoryTotals[category] ?? 0) + computedTotal;
    return sum + computedTotal;
  }, 0);

  const taxRate = toNumber(params.taxRate);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  const deposit = total * toNumber(params.depositPercent);

  return {
    subtotal,
    tax,
    total,
    deposit,
    categoryTotals,
  };
};

export const ROLLUP_ESTIMATE_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER = 'e11459ef-c3a3-43a8-8d3d-760df1f12a71';

export default defineLogicFunction({
  universalIdentifier: ROLLUP_ESTIMATE_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER,
  name: 'rollup-estimate',
  description: 'Roll up estimate line items into subtotal, tax, total, and deposit values',
  timeoutSeconds: 10,
  handler,
  isTool: true,
  toolInputSchema: {
    type: 'object',
    properties: {
      lineItems: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            category: { type: 'string', enum: ['LABOR', 'MATERIALS', 'ALLOWANCE', 'SUBCONTRACT', 'OTHER'] },
            quantity: { type: 'number' },
            unitPrice: { type: 'number' },
            totalPrice: { type: 'number' },
          },
          required: ['name'],
        },
      },
      taxRate: { type: 'number' },
      depositPercent: { type: 'number' },
    },
    required: ['lineItems'],
  },
});
