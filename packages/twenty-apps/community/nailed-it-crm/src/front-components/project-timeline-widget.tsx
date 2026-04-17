import { defineFrontComponent, useRecordId } from 'twenty-sdk';

const TimelineRow = ({ title, text }: { title: string; text: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 12, alignItems: 'start', padding: '12px 0', borderBottom: '1px solid #2b3445' }}>
    <div style={{ color: '#f6c453', fontWeight: 800 }}>{title}</div>
    <div style={{ color: '#d8d0c1', lineHeight: 1.5 }}>{text}</div>
  </div>
);

const ProjectTimelineWidget = () => {
  const recordId = useRecordId();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, borderRadius: 24, background: '#11151b', color: '#f7f2e7' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 6 }}>Project timeline</div>
          <div style={{ color: '#d0c4ad' }}>A simple production-first view of milestones, decisions, and day-to-day progress.</div>
        </div>
        <div style={{ padding: '10px 14px', background: '#222938', borderRadius: 999, color: '#f6c453', fontWeight: 700 }}>
          Record {recordId ?? 'context pending'}
        </div>
      </div>

      <div style={{ marginTop: 18, padding: 18, background: '#1b2230', borderRadius: 18, border: '1px solid #2f3950' }}>
        <TimelineRow title='Pre-construction' text='Scope is validated, selections are captured, and the approved estimate becomes the execution baseline.' />
        <TimelineRow title='Active build' text='Milestones, site meetings, and weekly progress updates keep everyone aligned while trades are on site.' />
        <TimelineRow title='Change handling' text='Any new request is documented before work proceeds so the base scope stays clean.' />
        <TimelineRow title='Warranty' text='Closeout items, warranty callbacks, and post-handoff support remain connected to the job.' />
      </div>

      <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <a href="/objects/projectMilestones" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open milestones</a>
        <a href="/objects/projectTimelineEntries" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open timeline entries</a>
        <a href="/objects/tasks" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open tasks</a>
      </div>
    </div>
  );
};

export const PROJECT_TIMELINE_WIDGET_UNIVERSAL_IDENTIFIER = 'b9f12d3c-43a9-47a8-b5ea-1bc3f2cb9d88';

export default defineFrontComponent({
  universalIdentifier: PROJECT_TIMELINE_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'project-timeline-widget',
  description: 'Project timeline widget',
  component: ProjectTimelineWidget,
});
