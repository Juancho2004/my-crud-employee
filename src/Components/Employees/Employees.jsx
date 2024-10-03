import { Table, Button, Spin } from "antd";
import { PerPageEmployee } from "./perPageEmployee";
import { useCrud } from "../../Hooks/useContexts";
import "./Employee.css";

export function Employees() {
  const {user, nextPage, backPage, loading, employeeId, employeeUpdate, deleteEmployeeFunction} = useCrud()

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <a onClick={() => employeeId(record.id)}>{text}</a>
      ),
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button onClick={() => employeeUpdate(record.id)}>Edit</Button>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button onClick={() => deleteEmployeeFunction(record)}>Remove</Button>
      ),
    }
  ];

  return (
    <section className="users">
      <div className="users__container">
        <Spin spinning={loading}>
          <Table
            dataSource={user}
            columns={columns}
            pagination={false}
            rowKey="id"
          />
          <div className="pagination-buttons">
            <Button onClick={backPage}>Back</Button>
            <PerPageEmployee/>
            <Button onClick={nextPage} disabled={user.length === 0}>
              Next
            </Button>
          </div>
        </Spin>
      </div>
    </section>
  );
}
