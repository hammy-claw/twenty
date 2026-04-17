import { defineLogicFunction } from 'twenty-sdk';

type LeadIntakePayload = Record<string, unknown> | unknown[] | string | number | boolean | null | undefined;

type NormalizedLeadIntake = {
  name: string;
  email?: string;
  phone?: string;
  source: 'WEBSITE' | 'HOUZZ' | 'REFERRAL' | 'REPEAT' | 'OTHER';
  projectType: 'KITCHEN' | 'MAIN_FLOOR' | 'BASEMENT' | 'SECONDARY_SUITE' | 'BATHROOM' | 'OTHER';
  budgetRange?: string;
  timeline?: string;
  notes?: string;
};

const asString = (value: unknown): string | undefined => {
  if (typeof value === 'string') return value.trim() || undefined;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return undefined;
};

const detectSource = (payload: Record<string, unknown>): NormalizedLeadIntake['source'] => {
  const raw = asString(payload.source ?? payload.leadSource ?? payload.referrer)?.toUpperCase();
  if (raw === 'HOUZZ' || raw === 'REFERRAL' || raw === 'REPEAT' || raw === 'OTHER') return raw;
  return 'WEBSITE';
};

const detectProjectType = (payload: Record<string, unknown>): NormalizedLeadIntake['projectType'] => {
  const raw = asString(payload.projectType ?? payload.project_type ?? payload.project)?.toUpperCase();
  if (raw === 'KITCHEN' || raw === 'MAIN_FLOOR' || raw === 'BASEMENT' || raw === 'SECONDARY_SUITE' || raw === 'BATHROOM' || raw === 'OTHER') {
    return raw;
  }
  return 'OTHER';
};

const handler = async (payload: LeadIntakePayload): Promise<{
  accepted: boolean;
  reason: string;
  payloadType: string;
  normalizedLead?: NormalizedLeadIntake;
}> => {
  const payloadType = Array.isArray(payload) ? 'array' : payload === null ? 'null' : typeof payload;

  if (!payload || Array.isArray(payload) || typeof payload !== 'object') {
    return {
      accepted: false,
      reason: 'Lead intake expects a form payload object.',
      payloadType,
    };
  }

  const record = payload as Record<string, unknown>;
  const normalizedLead: NormalizedLeadIntake = {
    name: asString(record.name ?? record.fullName ?? record.contactName ?? record.leadName) ?? 'Unnamed lead',
    email: asString(record.email ?? record.emailAddress),
    phone: asString(record.phone ?? record.phoneNumber ?? record.mobile),
    source: detectSource(record),
    projectType: detectProjectType(record),
    budgetRange: asString(record.budgetRange ?? record.budget ?? record.priceRange),
    timeline: asString(record.timeline ?? record.startDate ?? record.when),
    notes: asString(record.notes ?? record.message ?? record.details),
  };

  return {
    accepted: true,
    reason: 'Lead payload normalized for CRM intake and phone-first qualification.',
    payloadType,
    normalizedLead,
  };
};

export const LEAD_INTAKE_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER = 'f1e5f979-baaf-433e-b0c8-cc07981fae24';

export default defineLogicFunction({
  universalIdentifier: LEAD_INTAKE_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER,
  name: 'lead-intake',
  description: 'Webhook entry point for website or form-based lead intake',
  timeoutSeconds: 10,
  handler,
  httpRouteTriggerSettings: {
    path: '/lead-intake',
    httpMethod: 'POST',
    isAuthRequired: false,
  },
});
