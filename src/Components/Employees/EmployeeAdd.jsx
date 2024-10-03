import { Button, Input, Spin, Form, Card } from "antd";
import { useEmployeeAdd } from "../../Hooks/useEmployeeAdd";

export function AddEmployeeForm() {
  const { newEmployee, loading, error, saveEmployee, handleInputChange } = useEmployeeAdd();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveEmployee();
  };

  return (
    <Spin spinning={loading}>
      <Card title="Add New Employee" style={{ width: 400, margin: '0 auto' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Item label="Name">
            <Input
              name="name"
              value={newEmployee.name}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Job">
            <Input
              name="job"
              value={newEmployee.job}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleSubmit} disabled={loading}>
              {loading ? "Saving..." : "Add Employee"}
            </Button>
          </Form.Item>
        </Form>
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      </Card>
    </Spin>
  );
}
