import axios from 'axios';

const API_URL = 'http://localhost:8080/employees';

class EmployeeService {
    createEmployee(employee) {
        return axios.post(API_URL, employee);
    }

    getAllEmployees() {
        return axios.get(API_URL);
    }
}

export default new EmployeeService();