import { defineFrontComponent, useRecordId } from 'twenty-sdk';

const ScheduleRow = ({ label, value }: { label: string; value: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 12, padding: '10px 0', borderBottom: '1px solid #2b3445' }}>
    <div style={{ color: '#f6c453', fontWeight: 800 }}>{label}</div>
    <div style={{ color: '#d8d0c1', lineHeight: 1.5 }}>{value}</div>
  </div>
);

const ProjectScheduleWidget = () => {
  const recordId = useRecordId();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, borderRadius: 24, background: '#11151b', color: '#f7f2e7' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 6 }}>Project schedule</div>
          <div style={{ color: '#d0c4ad' }}>A renovation-first daily execution view for site visits, milestones, trade work, and closeout actions.</div>
        </div>
        <div style={{ padding: '10px 14px', background: '#222938', borderRadius: 999, color: '#f6c453', fontWeight: 700 }}>
          Record {recordId ?? 'context pending'}
        </div>
      </div>

      <div style={{ marginTop: 18, padding: 18, background: '#1b2230', borderRadius: 18, border: '1px solid #2f3950' }}>
        <ScheduleRow label='Today' value='Confirm crew arrival, open the site, check safety, and verify the plan before work starts.' />
        <ScheduleRow label='Next 72 hours' value='Sequence inspections, material deliveries, and client decisions so trades do not sit idle.' />
        <ScheduleRow label='Daily closeout' value='Capture progress photos, note blockers, update time, and leave the site ready for tomorrow.' />
        <ScheduleRow label='Escalations' value='Any delay, scope question, or change request gets logged before the team moves on.' />
      </div>

      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
        <div style={{ background: '#1b2230', border: '1px solid #2b3445', borderRadius: 16, padding: 16 }}>
          <div style={{ color: '#f6c453', fontWeight: 800, marginBottom: 8 }}>Daily checklist</div>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#d9d2c7', lineHeight: 1.7 }}>
            <li>Review the current milestone and trade sequence.</li>
            <li>Check material deliveries and missing selections.</li>
            <li>Log site notes, calls, and decisions in the timeline.</li>
            <li>Set the next day’s priorities before leaving the site.</li>
          </ul>
        </div>
        <div style={{ background: '#1b2230', border: '1px solid #2b3445', borderRadius: 16, padding: 16 }}>
          <div style={{ color: '#f6c453', fontWeight: 800, marginBottom: 8 }}>Daily controls</div>
          <div style={{ color: '#d9d2c7', lineHeight: 1.7 }}>
            Keep the job moving with a simple loop: schedule, execute, document, and close out. The goal is fewer surprises and less rework.
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <a href="/objects/appointments" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open appointments</a>
        <a href="/objects/tasks" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open tasks</a>
        <a href="/objects/projectMilestones" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open milestones</a>
        <a href="/objects/projectTimelineEntries" style={{ color: '#f6c453', textDecoration: 'none', border: '1px solid #f6c453', borderRadius: 12, padding: '10px 14px' }}>Open timeline entries</a>
      </div>
    </div>
  );
};

export const PROJECT_SCHEDULE_WIDGET_UNIVERSAL_IDENTIFIER = 'd6d9f1c7-43d6-4fbe-9d43-0ef4af0f2a2a';

export default defineFrontComponent({
  universalIdentifier: PROJECT_SCHEDULE_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'project-schedule-widget',
  description: 'Project schedule widget',
  component: ProjectScheduleWidget,
});
