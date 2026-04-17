import { defineFrontComponent } from 'twenty-sdk';

const Card = ({ title, text }: { title: string; text: string }) => (
  <div style={{ background: '#1b2230', border: '1px solid #2b3445', borderRadius: 16, padding: 16, minHeight: 116 }}>
    <div style={{ color: '#f6c453', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{title}</div>
    <div style={{ color: '#d9d2c7', lineHeight: 1.5 }}>{text}</div>
  </div>
);

const ClientDashboardWidget = () => {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, color: '#f7f2e7', background: '#11151b', borderRadius: 24, minHeight: 420 }}>
      <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Client dashboard</div>
      <div style={{ color: '#d0c4ad', marginBottom: 20 }}>
        A single place for homeowner contacts, project history, estimates, approvals, and active communication.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
        <Card title='Contact profile' text='Store homeowner, partner, designer, and vendor contacts with clean phone and email visibility.' />
        <Card title='Project history' text='Surface all related projects, estimates, change orders, and milestone progress in one place.' />
        <Card title='Communication timeline' text='Keep messages, follow-ups, and decisions in order so nothing gets lost.' />
        <Card title='Client action items' text='Track approvals, selections, and next steps without mixing in procurement or production noise.' />
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#1d2431', borderRadius: 16, color: '#d0c4ad' }}>
        Next implementation step: connect this layout to the new contacts object, then roll the same pattern into estimates, invoices, and project finance.
      </div>
    </div>
  );
};

export const CLIENT_DASHBOARD_WIDGET_UNIVERSAL_IDENTIFIER = 'd2050c1d-771a-450b-b819-2e5683497393';

export default defineFrontComponent({
  universalIdentifier: CLIENT_DASHBOARD_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'client-dashboard-widget',
  description: 'Client dashboard widget for contacts',
  component: ClientDashboardWidget,
});
