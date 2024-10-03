import { useState } from "react";
import { EmployeeService } from "../Services/Services";
import { API_USER } from "../Api/Api";

export function useEmployeeAdd() {
    const [newEmployee, setNewEmployee] = useState({
		name:'',
        job: ''
	});
  const [loading, setLoading] = useState(false);

    const employeeService = new EmployeeService(API_USER)

    const saveEmployee = async () => {
            setLoading(true);
            try {
                const addEmployee = await employeeService.addEmployee(newEmployee)
                console.log('Add a new employee', addEmployee)
                setLoading(false)
                return addEmployee

            } catch (error) {
                console.log('Error add a new employee', error)
                setLoading(false)
            }
        }
    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setNewEmployee((prev) => ({
            ...prev,
            [name] : value,
        }))
    }



  return {saveEmployee, newEmployee, handleInputChange, loading}
}
