import React, { useState } from 'react';

const EmployeeForm = (e) => {
    const[employee,setEmpoyee] = useState({name:'',designantion:'',ctc:'',email:''});

    const handleChange = (e) => {
        const {name,value} =e.target;
        setEmpoyee({...employee, [name]:value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        EmployeeService.createEmployee(employee).then(() => {
            setEmployee({ name: '', designation: '', ctc: '', email: '' });
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
             name="name"
             value={employee.name} 
             onChange={handleChange} 
             placeholder="Name" />

<input type="text" 
             name="designantion"
             value={employee.designantion} 
             onChange={handleChange} 
             placeholder="Name" />

<input type="number" 
             name="ctc"
             value={employee.ctc} 
             onChange={handleChange} 
             placeholder="Name" />

<input type="text" 
             name="name"
             value={employee.name} 
             onChange={handleChange} 
             placeholder="Name" />

   <button type="submit">Add Employee</button>
 </form>
    );
};
export default EmployeeForm;