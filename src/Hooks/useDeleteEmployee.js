import { API_USER } from "../Api/Api";
import { EmployeeService } from "../Services/Services";

export function useDeleteEmployee() {
    // const [currentDelete, setCurrentDelete] = useState(null);

    const employeeService = new EmployeeService(API_USER);

    const fetchDelete = async (id) => {
        if (!id) {
            console.error("No existe Id");
            return;
        }

        try {
            const detele = await employeeService.deleteEmployee(id)
            console.log(`User with identification is remove`, detele)
            return detele
        } catch (error) {
            console.error(`Error at remove user with identification`, error);
        }
    }

    const deleteEmployeeFunction = (employee) => {
        // setCurrentDelete(employee.id);
        fetchDelete(employee.id);
    }


  return {deleteEmployeeFunction}
}
