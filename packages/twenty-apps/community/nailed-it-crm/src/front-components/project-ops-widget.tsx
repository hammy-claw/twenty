import { defineFrontComponent, useRecordId } from 'twenty-sdk';

const Item = ({ title, text }: { title: string; text: string }) => (
  <div style={{ background: '#232a35', borderRadius: 14, padding: 14 }}>
    <div style={{ color: '#f6c453', fontWeight: 700, marginBottom: 6 }}>{title}</div>
    <div style={{ color: '#d0c4ad' }}>{text}</div>
  </div>
);

const ProjectOpsWidget = () => {
  const recordId = useRecordId();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 20, borderRadius: 20, background: '#161c24', color: '#f5efe1' }}>
      <h3 style={{ marginTop: 0, color: '#f6c453' }}>Project operating rhythm</h3>
      <div style={{ display: 'grid', gap: 12 }}>
        <Item title='1. Scope locked' text='Only approved work stays in the base quote.' />
        <Item title='2. Selections tracked' text='Every finish, fixture, and allowance stays visible.' />
        <Item title='3. Trades staged' text='Tasks are high-level, simple, and clearly assigned.' />
        <Item title='4. Change orders first' text='Anything new is handled cleanly before work proceeds.' />
      </div>
      <div style={{ marginTop: 16, padding: 12, background: '#222938', borderRadius: 14 }}>
        Project context: {recordId ?? 'No record context yet'}
      </div>
    </div>
  );
};

export const PROJECT_OPS_WIDGET_UNIVERSAL_IDENTIFIER = 'b5fbf214-0a49-4969-95a3-442cfba9dd35';

export default defineFrontComponent({
  universalIdentifier: PROJECT_OPS_WIDGET_UNIVERSAL_IDENTIFIER,
  name: 'project-ops-widget',
  description: 'Project operating rhythm widget',
  component: ProjectOpsWidget,
});
