import { Select } from "antd";
import { useCrud } from "../../Hooks/useContexts";
const { Option } = Select;

export function PerPageEmployee() {
  const {per_page, handlePerPage} = useCrud()

  return (
    <Select
      onChange={handlePerPage}
      value={per_page}
      style={{
        width: "35%",
      }}
    >
      {per_page !== 6 && <Option value={6}>6</Option>}
      <Option value={9}>9</Option>
      <Option value={12}>12</Option>
    </Select>
  );
}
