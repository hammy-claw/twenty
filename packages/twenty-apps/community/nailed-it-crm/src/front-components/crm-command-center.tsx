import { defineFrontComponent, getPublicAssetUrl } from 'twenty-sdk';

const ActionCard = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div style={{ background: '#1d2431', borderRadius: 18, padding: 16, minHeight: 120, border: '1px solid #2c3445' }}>
    <div style={{ color: '#f6c453', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{title}</div>
    <div style={{ color: '#d9d2c7', lineHeight: 1.5 }}>{subtitle}</div>
  </div>
);

const CrmCommandCenter = () => {
  const logoUrl = getPublicAssetUrl('logo.svg');

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, color: '#f7f2e7', background: '#11151b', borderRadius: 24, minHeight: 420 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
        <img src={logoUrl} alt='Nailed It CRM' style={{ width: 56, height: 56 }} />
        <div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>Nailed It CRM Command Center</div>
          <div style={{ color: '#d0c4ad', marginTop: 4 }}>Replacement hub for leads, estimates, project control, selections, and follow-up.</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        <ActionCard title='Lead intake' subtitle='Phone-first qualification, source tracking, and booking.' />
        <ActionCard title='Estimate flow' subtitle='Quote drafting, approvals, versions, and change-order control.' />
        <ActionCard title='Project ops' subtitle='Milestones, selections, vendors, and daily clarity.' />
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
        <a href='/settings/applications' style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open applications settings</a>
        <a href='/objects/leads' style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open leads</a>
        <a href='/objects/contacts' style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open contacts</a>
        <a href='/objects/projects' style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open projects</a>
        <a href='/objects/estimates' style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open estimates</a>
        <a href='/objects/changeOrders' style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open change orders</a>
        <a href='/objects/estimateLineItems' style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open line items</a>
        <a href='/objects/estimateTemplates' style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open templates</a>
        <a href='/objects/estimateBuild' style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open estimate build</a>
        <a href='/objects/changeOrders' style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Review change order approvals</a>
      </div>

      <div style={{ marginTop: 24, padding: 16, background: '#1b2230', borderRadius: 18, color: '#d0c4ad' }}>
        Live dev access: tailnet URL is active on this machine, so you can review the current CRM in the browser while I keep building.
        <br />
        Next build phase: connect lead sources, add estimate line items, wire in Hermes AI tools, and surface client-ready dashboards.
      </div>
    </div>
  );
};

export const CRM_COMMAND_CENTER_UNIVERSAL_IDENTIFIER = '7250fd0b-1e45-4108-9c3d-d53991145ef3';

export default defineFrontComponent({
  universalIdentifier: CRM_COMMAND_CENTER_UNIVERSAL_IDENTIFIER,
  name: 'crm-command-center',
  description: 'Nailed It renovation command center',
  component: CrmCommandCenter,
  command: {
    universalIdentifier: 'b0490ec8-62a4-4bde-9a44-9e6e7f8d5001',
    shortLabel: 'CRM',
    label: 'Nailed It CRM',
    icon: 'IconHome',
    isPinned: true,
    availabilityType: 'GLOBAL',
  },
});