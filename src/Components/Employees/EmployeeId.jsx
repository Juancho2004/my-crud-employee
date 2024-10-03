import { Card, Spin } from "antd";
import { useCrud } from "../../Hooks/useContexts";

export function EmployeeId() {
  const { details, loading } = useCrud();

  return (
    <>
    <section className="employee__id">
      <div className="employee__id--container"></div>
      {details && (
        <Spin spinning={loading}>
          <Card
            hoverable
            style={{ width: 240, margin: '0 auto' }}
            cover={<img alt="avatar" src={details.avatar} />}
          >
            <Card.Meta
              title={`${details.first_name} ${details.last_name}`}
              description={details.email}
            />
          </Card>
        </Spin>
      )}
    </section>
    </>
  );
}
