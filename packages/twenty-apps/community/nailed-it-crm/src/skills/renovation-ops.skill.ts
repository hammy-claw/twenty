import { defineSkill } from 'twenty-sdk';

export const RENOVATION_OPS_SKILL_UNIVERSAL_IDENTIFIER = '96aafcf3-8d01-420a-ba32-84cf3e2023db';

export default defineSkill({
  universalIdentifier: RENOVATION_OPS_SKILL_UNIVERSAL_IDENTIFIER,
  name: 'renovation-ops',
  label: 'Renovation Ops',
  description: 'Instructions for running Nailed It’s CRM with premium discipline and clean scope control.',
  icon: 'IconChecklist',
  content: `Use this skill when helping Nailed It Developments with a lead or project.

Workflow:
1. Qualify the lead by phone, budget, timing, decision-maker, and project type.
2. Confirm scope boundaries before estimating.
3. Draft a premium estimate, then review for exclusions and allowances.
4. Surface selections, procurement, and change orders separately.
5. Produce a short project summary with next actions and risks.

Non-negotiables:
- Do not blur estimate scope with extra work.
- Anything not in the approved quote becomes a change order.
- Keep production planning simple and high level.
- Optimize for clarity, trust, and speed.
- Ask questions when detail is missing.`,
});
