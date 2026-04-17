import { defineFrontComponent, useRecordId } from 'twenty-sdk';

const Box = ({ title, text }: { title: string; text: string }) => (
  <div style={{ background: '#202736', border: '1px solid #2f3950', borderRadius: 16, padding: 14 }}>
    <div style={{ color: '#f6c453', fontWeight: 800, marginBottom: 6 }}>{title}</div>
    <div style={{ color: '#d8d0c1', lineHeight: 1.5 }}>{text}</div>
  </div>
);

const EstimateAssemblyWidget = () => {
  const recordId = useRecordId();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, borderRadius: 24, background: '#11161f', color: '#f7f2e7' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 6 }}>Quote assembly</div>
          <div style={{ color: '#d0c4ad' }}>Build the estimate from approved scope, templates, allowances, and explicit exclusions.</div>
        </div>
        <div style={{ padding: '10px 14px', background: '#222938', borderRadius: 999, color: '#f6c453', fontWeight: 700 }}>
          Record {recordId ?? 'context pending'}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, marginTop: 18 }}>
        <Box title="1. Base scope" text="Use the approved quote as the only source of truth. Anything missing becomes TBD or change-order work." />
        <Box title="2. Line items" text="Separate labor, materials, allowances, subcontracting, and premium finishes so the total stays transparent." />
        <Box title="3. Template blocks" text="Reuse proven renovation scopes for kitchens, main floors, basements, bathrooms, and secondary suites." />
        <Box title="4. Client clarity" text="Show inclusions, exclusions, assumptions, and approvals plainly so there are no hidden surprises." />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12, marginTop: 12 }}>
        <Box title="Approvals" text="Status, version, approval timestamp, and approver stay visible on the record." />
        <Box title="Pricing" text="Subtotal, tax, total, and deposit are tracked with no guessing." />
        <Box title="Escalations" text="Selections gaps and requested extras can be routed into change orders." />
      </div>

      <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <a href="/objects/estimateLineItems" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open line items</a>
        <a href="/objects/estimateTemplates" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open templates</a>
        <a href="/objects/changeOrders" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open change orders</a>
      </div>
    </div>
  );
};

export const ESTIMATE_ASSEMBLY_WIDGET_UNIVERSAL_IDENTIFIER = '7fb86261-0d31-4cb7-8d1f-9b991764ed6a';

export default defineFrontComponent({
  universalIdentifier: ESTIMATE_ASSEMBLY_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'estimate-assembly-widget',
  description: 'Estimate assembly widget for renovation quote building',
  component: EstimateAssemblyWidget,
});
