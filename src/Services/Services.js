import { api } from "../Api/Api";
import { EmployeeClass } from "./Employee";
import { buildParamsSearchs } from "./QueryParams";

export class EmployeeService {
  constructor(endpoint){
    this.endpoint = endpoint;
  }

  async fetchEmployees (params) {
    const url = buildParamsSearchs(this.endpoint, params);
    const response = await api.get(url)
    if (response) {
        const { data } = response.data;
        return data.map(emp => new EmployeeClass(emp.id, emp.email, emp.first_name, emp.last_name))
    }
  }

  async fetchEmployeeId (id) {
    let url = `${this.endpoint}${id}`
    const response = await api.get(url)
    if (response) {
        const { data } = response.data;
        return new EmployeeClass(data.id, data.email, data.first_name, data.last_name, data.avatar)
    }
  }

  async addEmployee (employeeData) {
    const response = await api.post(this.endpoint, employeeData)
    const { id, name, job } = response.data;
    return new EmployeeClass(id, name, job)
  }

  async updateEmployee (employeeData, employeeId) {
    let url = `${this.endpoint}${employeeId}`
    const response = await api.put(url, employeeData)
    const { id, name, job } = response.data;
    return new EmployeeClass(id, name, job)
  }

  async deleteEmployee (employeeId) {
    let url = `${this.endpoint}${employeeId}`
    const response = await api.delete(url)
    if (response.status === 204) {
      return `Employee with ID ${employeeId} deleted successfully`;
    } else {
      throw new Error('Failed to delete employee');
    }

  }
}