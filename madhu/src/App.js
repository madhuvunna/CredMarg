// // import logo from './logo.svg';
// import './App.css';
// import EmployeeForm from './Components/EmployeeForm';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;


import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import VendorForm from './components/VendorForm';
import EmployeeList from './Components/EmployeeList';
import VendorForm from './components/VendorForm';
import EmailList from './Components/EmailList';
import EmailService from './services/EmailService';

const App = () => {
    const handleSendEmails = () => {
        EmailService.sendEmail();
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                <h2>Add Employee</h2>
                <EmployeeForm />
                <EmployeeList />
            </div>
            <div>
                <h2>Add Vendor</h2>
                <VendorForm />
                <VendorList />
            </div>
            <div>
                <button onClick={handleSendEmails}>Send Emails to Vendors</button>
                <EmailList />
            </div>
        </div>
    );
};

export default App;

