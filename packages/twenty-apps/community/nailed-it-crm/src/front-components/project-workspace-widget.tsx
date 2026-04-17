import { defineFrontComponent, useRecordId } from 'twenty-sdk';

const SectionCard = ({ title, text, buttonLabel, href }: { title: string; text: string; buttonLabel: string; href: string }) => (
  <div style={{ background: '#1b2230', border: '1px solid #2b3445', borderRadius: 16, padding: 16, minHeight: 140 }}>
    <div style={{ color: '#f6c453', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{title}</div>
    <div style={{ color: '#d9d2c7', lineHeight: 1.5, marginBottom: 12 }}>{text}</div>
    <a href={href} style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 10, padding: '8px 12px', display: 'inline-block' }}>
      {buttonLabel}
    </a>
  </div>
);

const ProjectWorkspaceWidget = () => {
  const recordId = useRecordId();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, color: '#f7f2e7', background: '#11151b', borderRadius: 24, minHeight: 480 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start', marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>Project workspace</div>
          <div style={{ color: '#d0c4ad', marginTop: 4 }}>
            A Houzz-style project shell with planning, management, and finance surfaces grouped for fast renovation execution.
          </div>
        </div>
        <div style={{ color: '#d0c4ad', background: '#1d2431', borderRadius: 14, padding: '10px 14px', whiteSpace: 'nowrap' }}>
          Project context: {recordId ?? 'No record context yet'}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        <SectionCard
          title='Planning'
          text='Estimates, line items, takeoffs, floor plans, mood boards, selections, and project documents live here first so scope stays clean before work starts.'
          buttonLabel='Open planning tools'
          href='/objects/estimates'
        />
        <SectionCard
          title='Management'
          text='Track files, photos, schedule, tasks, punchlists, daily logs, and time tracking without burying the team in extra steps.'
          buttonLabel='Open management tools'
          href='/objects/tasks'
        />
        <SectionCard
          title='Finance'
          text='Keep invoices, change orders, retainers, and approval status tied to the project so money and scope stay aligned.'
          buttonLabel='Open finance tools'
          href='/objects/changeOrders'
        />
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#232a35', borderRadius: 16, color: '#d0c4ad' }}>
        Next slice: wire the project tabs to live relations, then make the planning and finance cards render project-linked data.
      </div>
    </div>
  );
};

export const PROJECT_WORKSPACE_WIDGET_UNIVERSAL_IDENTIFIER = '1d01cfb3-7595-40ad-9177-801e4593bb8a';

export default defineFrontComponent({
  universalIdentifier: PROJECT_WORKSPACE_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'project-workspace-widget',
  description: 'Project workspace widget',
  component: ProjectWorkspaceWidget,
});
