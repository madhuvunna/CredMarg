import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Employees</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.email}>
                        {employee.name} - {employee.designation} - {employee.ctc} - {employee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;