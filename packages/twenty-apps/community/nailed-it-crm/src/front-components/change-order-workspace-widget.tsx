import { defineFrontComponent, useRecordId } from 'twenty-sdk';

const Pill = ({ title, text }: { title: string; text: string }) => (
  <div style={{ background: '#202736', border: '1px solid #2f3950', borderRadius: 16, padding: 14 }}>
    <div style={{ color: '#f6c453', fontWeight: 800, marginBottom: 6 }}>{title}</div>
    <div style={{ color: '#d8d0c1', lineHeight: 1.5 }}>{text}</div>
  </div>
);

const ChangeOrderWorkspaceWidget = () => {
  const recordId = useRecordId();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, borderRadius: 24, background: '#11151b', color: '#f7f2e7' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 6 }}>Change order review</div>
          <div style={{ color: '#d0c4ad' }}>Keep scope deltas, approvals, and pricing changes separate from the base estimate.</div>
        </div>
        <div style={{ padding: '10px 14px', background: '#222938', borderRadius: 999, color: '#f6c453', fontWeight: 700 }}>
          Record {recordId ?? 'context pending'}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, marginTop: 18 }}>
        <Pill title='1. Scope delta' text='Capture the exact new work, deletions, or substitutions before anyone starts the extra work.' />
        <Pill title='2. Pricing delta' text='Show the price impact clearly so the client sees the cost before approving.' />
        <Pill title='3. Approval trail' text='Track who requested it, who approved it, and when the approval happened.' />
        <Pill title='4. Execution handoff' text='Once approved, the change order can be handed off to production without ambiguity.' />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12, marginTop: 12 }}>
        <Pill title='Statuses' text='Draft, pending approval, approved, and rejected are the core states.' />
        <Pill title='Communication' text='Requested-by and approval notes should stay visible in the record.' />
        <Pill title='Control' text='This keeps the base scope clean so nothing sneaks into production for free.' />
      </div>

      <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <a href="/objects/changeOrders" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open change orders</a>
        <a href="/objects/projects" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open projects</a>
        <a href="/objects/estimates" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open estimates</a>
      </div>
    </div>
  );
};

export const CHANGE_ORDER_WORKSPACE_WIDGET_UNIVERSAL_IDENTIFIER = 'a2cfe57e-7d9d-4b85-8d4f-5a5f5b5c6d7e';

export default defineFrontComponent({
  universalIdentifier: CHANGE_ORDER_WORKSPACE_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'change-order-workspace-widget',
  description: 'Change order review widget',
  component: ChangeOrderWorkspaceWidget,
});
