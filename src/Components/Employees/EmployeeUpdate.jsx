import { Button, Card, Form, Input, Spin } from "antd";
import { useCrud } from "../../Hooks/useContexts";

export function EmployeeUpdate() {
  const {
    updateDetails,
    updateEmployee,
    loadingUpdateEmployee,
    updateChange,
    error,
  } = useCrud();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateEmployee();
  };

  return (
    <>
      {updateDetails && (
        <Spin spinning={loadingUpdateEmployee}>
          <Card
            title="Update Employee"
            style={{ width: 400, margin: "0 auto" }}
          >
            <Form onSubmit={handleSubmit}>
              <Form.Item label="Name">
                <Input
                  name="name"
                  value={updateDetails.name}
                  onChange={updateChange}
                />
              </Form.Item>
              <Form.Item label="Job">
                <Input
                  name="job"
                  value={updateDetails.job}
                  onChange={updateChange}
                />
              </Form.Item>
              <Form.Item label="first_name">
                <Input
                  name="first_name"
                  value={updateDetails.first_name}
                  onChange={updateChange}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={handleSubmit}
                  disabled={loadingUpdateEmployee}
                >
                  {loadingUpdateEmployee ? "Saving..." : "Update Employee"}
                </Button>
              </Form.Item>
            </Form>
            {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
          </Card>
        </Spin>
      )}
    </>
  );
}
