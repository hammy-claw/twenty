import { defineFrontComponent, useRecordId } from 'twenty-sdk';

const LeadQualificationWidget = () => {
  const recordId = useRecordId();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, borderRadius: 20, background: '#171b22', color: '#f5efe1' }}>
      <h3 style={{ marginTop: 0, color: '#f6c453' }}>Lead qualification</h3>
      <ul style={{ lineHeight: 1.7, color: '#d0c4ad' }}>
        <li>Confirm property type and project size</li>
        <li>Confirm decision-maker and phone number</li>
        <li>Confirm budget range and timeline</li>
        <li>Confirm whether scope fits premium renovation work</li>
        <li>Decide: book, nurture, or disqualify</li>
      </ul>
      <div style={{ marginTop: 16, padding: 12, background: '#232a35', borderRadius: 14 }}>
        Current record: {recordId ?? 'No record context yet'}
      </div>
    </div>
  );
};

export const LEAD_QUALIFICATION_WIDGET_UNIVERSAL_IDENTIFIER = '4824d2b3-31c2-4a07-be84-653ca3b8a10e';

export default defineFrontComponent({
  universalIdentifier: LEAD_QUALIFICATION_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'lead-qualification-widget',
  description: 'Lead qualification checklist widget',
  component: LeadQualificationWidget,
});
