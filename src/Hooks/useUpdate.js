import { useEffect, useState } from "react";
import { EmployeeService } from "../Services/Services";
import { API_USER } from "../Api/Api";

export function useUpdate() {
    const [updateDetails, setUpdateDetails] = useState(null);
    const [updateCurrent, setUpdateCurrent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        job: '',
        first_name: ''
    });

    const employeeUpdate = (id) => {
        if (id) {
            setUpdateCurrent(id);
            console.log(id);
        }
    };

    const employeeService = new EmployeeService(API_USER);

    useEffect(() => {
        const fetchUpdate = async () => {
            if (updateCurrent) {
                setLoading(true);
                setError(null);
                try {
                    const update = await employeeService.fetchEmployeeId(updateCurrent);
                    setUpdateDetails(update);
                    console.log(update)
                } catch (error) {
                    console.error('Error getting edit of user', error);
                    setError('Failed to fetch employee details');
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchUpdate();
    }, [updateCurrent]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewEmployee((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const saveEmployee = async () => {
        setLoading(true);
        setError(null);
        try {
            if (updateCurrent) {
                const updateEmployee = await employeeService.updateEmployee(updateCurrent, newEmployee);
                console.log('Update employee', updateCurrent);
                return updateEmployee;
            }
        } catch (error) {
            console.error("Error saving employee:", error);
            setError('Failed to save employee');
        } finally {
            setLoading(false);
        }
    };

    return { updateDetails, employeeUpdate, saveEmployee, handleInputChange, loading, error };
}
