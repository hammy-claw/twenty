import { defineFrontComponent, useRecordId } from 'twenty-sdk';

const Bullet = ({ title, text }: { title: string; text: string }) => (
  <div style={{ background: '#1c2431', border: '1px solid #2c3445', borderRadius: 18, padding: 16 }}>
    <div style={{ color: '#f6c453', fontWeight: 800, marginBottom: 8 }}>{title}</div>
    <div style={{ color: '#d9d2c7', lineHeight: 1.55 }}>{text}</div>
  </div>
);

const ChangeOrderApprovalWidget = () => {
  const recordId = useRecordId();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, borderRadius: 24, background: '#11161f', color: '#f7f2e7' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 6 }}>Approval workflow</div>
          <div style={{ color: '#d0c4ad', lineHeight: 1.5 }}>
            The approval step is where the client says yes or no before the extra work is allowed to hit production.
          </div>
        </div>
        <div style={{ padding: '10px 14px', background: '#222938', borderRadius: 999, color: '#f6c453', fontWeight: 700 }}>
          Record {recordId ?? 'pending'}
        </div>
      </div>

      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
        <Bullet title="Pending approval" text="This is the only state where the change order should be waiting on client confirmation." />
        <Bullet title="Approved" text="Once approved, the scope delta can be handed to production and billed appropriately." />
        <Bullet title="Rejected" text="Rejected items should stay documented for traceability and scope clarity." />
        <Bullet title="Audit trail" text="Requested-by, approved-by, approved-at, and approval notes make the record defensible." />
      </div>

      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        <Bullet title="Keep scope clean" text="No new work should quietly slip into the original quote." />
        <Bullet title="Keep pricing visible" text="The amount has to be obvious before anyone signs off." />
        <Bullet title="Keep the team aligned" text="Once approved, the crew should know it is no longer just a conversation." />
      </div>

      <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <a href="/objects/changeOrders" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open change orders</a>
        <a href="/objects/estimates" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open estimates</a>
        <a href="/objects/projects" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open projects</a>
      </div>
    </div>
  );
};

export const CHANGE_ORDER_APPROVAL_WIDGET_UNIVERSAL_IDENTIFIER = '7ae478b7-2a31-432f-bf1a-2bb4f4f9f9a1';

export default defineFrontComponent({
  universalIdentifier: CHANGE_ORDER_APPROVAL_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'change-order-approval-widget',
  description: 'Change order approval widget',
  component: ChangeOrderApprovalWidget,
});
