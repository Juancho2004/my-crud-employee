import { useEffect, useState } from "react";
import { EmployeeService } from "../Services/Services";
import { API_USER } from "../Api/Api";

export function useEmployeeId() {
  const [details, setDetails] = useState(null);
  const [current, setCurrent] = useState([]);
  const [loading, setLoading] = useState(true);

  const employeeId = (id) => {
    if (id) {
      setCurrent(id);
      console.log(id);
    }
  };

  const employeeServiceId = new EmployeeService(API_USER);

  useEffect(() => {
    const fetchEmployeeId = async () => {
      if (current) {
        setLoading(true);

        try {
          const response = await employeeServiceId.fetchEmployeeId(current);
          setDetails(response);
          console.log(response);
        } catch (error) {
          console.error("Error get id for user", error);
        }
      }
    };

    fetchEmployeeId();
  }, [current]);

  return { employeeId, details, loading, current };
}
