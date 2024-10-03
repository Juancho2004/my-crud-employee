import { CrudProvider } from "../../Hooks/useContexts";
import { useDeleteEmployee } from "../../Hooks/useDeleteEmployee";
import { useEmployeeAdd } from "../../Hooks/useEmployeeAdd";
import { useEmployeeId } from "../../Hooks/useEmployeeId";
import { useEmployees } from "../../Hooks/useEmployees";
import { useUpdate } from "../../Hooks/useUpdate";
import { AddEmployeeForm } from "./EmployeeAdd";
import { EmployeeId } from "./EmployeeId";
import { Employees } from "./Employees";
import { EmployeeUpdate } from "./EmployeeUpdate";

export function PrincipalViewEmployee() {
  const {
    user,
    per_page,
    setPer_page,
    handlePerPage,
    nextPage,
    backPage,
    loading,
  } = useEmployees();

  const { employeeId, details, loading: loadingId, current } = useEmployeeId();

  const {saveEmployee, newEmployee, handleInputChange, loading: loadingAdd } = useEmployeeAdd()

  const {updateDetails, employeeUpdate, saveEmployee: updateEmployee, handleInputChange: updateChange, loading: loadingUpdateEmployee, error} = useUpdate()

  const {deleteEmployeeFunction} = useDeleteEmployee()

  const contextValue = {
    // EMPLOYEE
    user,
    per_page,
    setPer_page,
    handlePerPage,
    nextPage,
    backPage,
    loading,

    // EMPLOYEEID
    employeeId,
    details,
    loadingId,

    // EMPLOYEEADD
    saveEmployee,
    newEmployee,
    handleInputChange,
    loadingAdd,

    // EMPLOYEEUPDATE
      updateDetails,
      employeeUpdate,
      updateEmployee,
      loadingUpdateEmployee,
      updateChange,
      error,

      // DELETEEMPLOYEE
      deleteEmployeeFunction
  };

  return (
    <CrudProvider value={contextValue}>
      <div>
        {current.length === 0 ? (
            <Employees/>
        ):(
            <EmployeeId/>
        )}

        <AddEmployeeForm/>
        <EmployeeUpdate/>
      </div>
    </CrudProvider>
  );
}
