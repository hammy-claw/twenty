import { defineFrontComponent, useRecordId } from 'twenty-sdk';

const Pill = ({ label }: { label: string }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 10px', borderRadius: 999, background: '#222938', color: '#f6c453', fontSize: 12, fontWeight: 700 }}>
    {label}
  </span>
);

const Card = ({ title, text }: { title: string; text: string }) => (
  <div style={{ background: '#1c2431', border: '1px solid #2c3445', borderRadius: 18, padding: 16 }}>
    <div style={{ color: '#f6c453', fontWeight: 800, marginBottom: 8 }}>{title}</div>
    <div style={{ color: '#d9d2c7', lineHeight: 1.55 }}>{text}</div>
  </div>
);

const EstimateBuildWidget = () => {
  const recordId = useRecordId();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, borderRadius: 24, background: '#11161f', color: '#f7f2e7' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 6 }}>Estimate build</div>
          <div style={{ color: '#d0c4ad', lineHeight: 1.5 }}>
            Assemble the proposal from line items and proven templates, then lock the result to the approved scope.
          </div>
        </div>
        <Pill label={`Record ${recordId ?? 'pending'}`} />
      </div>

      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        <Card title="Line items" text="Break the estimate into labor, materials, allowances, subcontractors, and clear total prices." />
        <Card title="Templates" text="Reuse kitchen, main floor, basement, bathroom, and secondary suite scopes without reinventing the wheel." />
        <Card title="Approval" text="Track status, version, approver, timestamps, and approval notes in one place." />
      </div>

      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
        <Card title="Pricing discipline" text="Keep subtotal, tax, total, and deposit visible so the client sees the full shape of the deal." />
        <Card title="Scope control" text="Anything outside the approved estimate should be routed into a change order instead of hidden in the quote." />
      </div>

      <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <a href="/objects/estimateLineItems" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open line items</a>
        <a href="/objects/estimateTemplates" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open templates</a>
        <a href="/objects/changeOrders" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open change orders</a>
      </div>
    </div>
  );
};

export const ESTIMATE_BUILD_WIDGET_UNIVERSAL_IDENTIFIER = '5f01a8bf-1d4b-4ca0-b1c0-50c6ac5c5a1d';

export default defineFrontComponent({
  universalIdentifier: ESTIMATE_BUILD_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'estimate-build-widget',
  description: 'Estimate build widget for renovation quote assembly',
  component: EstimateBuildWidget,
});
