import { defineFrontComponent, useRecordId } from 'twenty-sdk';

const Card = ({ title, text }: { title: string; text: string }) => (
  <div style={{ background: '#1b2230', border: '1px solid #2b3445', borderRadius: 16, padding: 16, minHeight: 120 }}>
    <div style={{ color: '#f6c453', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{title}</div>
    <div style={{ color: '#d9d2c7', lineHeight: 1.5 }}>{text}</div>
  </div>
);

const InvoiceWorkspaceWidget = () => {
  const recordId = useRecordId();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, color: '#f7f2e7', background: '#11151b', borderRadius: 24, minHeight: 420 }}>
      <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Invoice workspace</div>
      <div style={{ color: '#d0c4ad', marginBottom: 20 }}>
        Draft, send, track, and collect project invoices without mixing them into the estimate or project workflow.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
        <Card title='Invoice status' text='Draft, sent, partially paid, paid, and overdue states need to stay visible at a glance.' />
        <Card title='Project link' text='Every invoice should remain tied back to a job so cash flow stays connected to production.' />
        <Card title='Payment tracking' text='Surface due dates, paid-at dates, and remaining balances in the record view.' />
        <Card title='Next step' text='Add payment sync, retainer handling, and invoice creation from approved estimates.' />
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#232a35', borderRadius: 16, color: '#d0c4ad' }}>
        Invoice context: {recordId ?? 'No record context yet'}
      </div>
    </div>
  );
};

export const INVOICE_WIDGET_UNIVERSAL_IDENTIFIER = '9debb46a-40ef-4695-923c-2af012474577';

export default defineFrontComponent({
  universalIdentifier: INVOICE_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'invoice-workspace-widget',
  description: 'Invoice workspace widget',
  component: InvoiceWorkspaceWidget,
});
