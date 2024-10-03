import { useEffect, useMemo } from "react";
import { useState } from "react";
import { EmployeeService } from "../Services/Services";
import { API_USER } from "../Api/Api";

export function useEmployees() {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [per_page, setPer_page] = useState(6);
  const [loading, setLoading] = useState(true);

  const params = useMemo(
    () => ({
        page,
        per_page,
      }),
      [page, per_page]
  );

  const employeeService = new EmployeeService(API_USER)

  useEffect(() => {
    fetchUser();
  }, [params]);

  const fetchUser = async () => {
    setLoading(true)
    try {
      const response = await employeeService.fetchEmployees(params);
      setUser(response);
      console.log(response);
      setLoading(false)
    } catch (error) {
      console.error("Error get Users", error);
    }
  };

  const handlePerPage = (value) =>{
    setPer_page(value)
  }

  const nextPage = () =>{
    setPage( page => page + 1)
  }

  const backPage = () =>{
    setPage( page => page - 1)
  }

  return { user, loading, per_page, handlePerPage, nextPage, backPage };
}
