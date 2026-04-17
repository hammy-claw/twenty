import { defineFrontComponent, useRecordId } from 'twenty-sdk';

const EstimateScopeWidget = () => {
  const recordId = useRecordId();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, borderRadius: 20, background: '#151920', color: '#f5efe1' }}>
      <h3 style={{ marginTop: 0, color: '#f6c453' }}>Estimate discipline</h3>
      <ul style={{ lineHeight: 1.7, color: '#d0c4ad' }}>
        <li>Define scope clearly</li>
        <li>Keep allowances visible</li>
        <li>Separate base scope from extras</li>
        <li>Track changes as change orders</li>
        <li>Make approvals easy to see</li>
      </ul>
      <div style={{ marginTop: 16, padding: 12, background: '#222938', borderRadius: 14 }}>
        Estimate context: {recordId ?? 'No record context yet'}
      </div>
    </div>
  );
};

export const ESTIMATE_SCOPE_WIDGET_UNIVERSAL_IDENTIFIER = 'f50614c8-23bd-43fc-bdef-80558ceb5950';

export default defineFrontComponent({
  universalIdentifier: ESTIMATE_SCOPE_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'estimate-scope-widget',
  description: 'Estimate scope widget',
  component: EstimateScopeWidget,
});
