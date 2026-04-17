import { defineFrontComponent, useRecordId } from 'twenty-sdk';

const Item = ({ label, detail }: { label: string; detail: string }) => (
  <div style={{ background: '#1c2431', border: '1px solid #2c3445', borderRadius: 18, padding: 16 }}>
    <div style={{ color: '#f6c453', fontWeight: 800, marginBottom: 6 }}>{label}</div>
    <div style={{ color: '#d9d2c7', lineHeight: 1.55 }}>{detail}</div>
  </div>
);

const ProjectCommunicationWidget = () => {
  const recordId = useRecordId();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, borderRadius: 24, background: '#11161f', color: '#f7f2e7' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 6 }}>Communication timeline</div>
          <div style={{ color: '#d0c4ad', lineHeight: 1.5 }}>
            Keep client messages, calls, and key updates together so the project history is easy to review.
          </div>
        </div>
        <div style={{ padding: '10px 14px', background: '#222938', borderRadius: 999, color: '#f6c453', fontWeight: 700 }}>
          Record {recordId ?? 'pending'}
        </div>
      </div>

      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
        <Item label="Lead handoff" detail="Capture what was promised before the job started so the production team is aligned." />
        <Item label="Estimate updates" detail="Record any estimate revisions, scope clarifications, or client questions in one place." />
        <Item label="Client requests" detail="Track small asks before they become untracked extras or awkward assumptions." />
        <Item label="Decision log" detail="Document approvals, rejections, and action items so nobody has to guess later." />
      </div>

      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        <Item label="Phone-first" detail="For Nailed It, phone calls still matter; the timeline should reflect that reality." />
        <Item label="Scope discipline" detail="Anything outside the approved scope belongs in a change order or an explicit note." />
        <Item label="No noise" detail="The goal is simple: a clean history that helps the team move faster." />
      </div>

      <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <a href="/objects/projects" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open projects</a>
        <a href="/objects/contacts" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open contacts</a>
        <a href="/objects/estimates" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open estimates</a>
      </div>
    </div>
  );
};

export const PROJECT_COMMUNICATION_WIDGET_UNIVERSAL_IDENTIFIER = '5b8e81db-f0b8-4c25-99ca-20f56c5c7b55';

export default defineFrontComponent({
  universalIdentifier: PROJECT_COMMUNICATION_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'project-communication-widget',
  description: 'Project communication timeline widget',
  component: ProjectCommunicationWidget,
});
