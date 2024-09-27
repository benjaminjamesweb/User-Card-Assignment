import { useState } from 'react';
import './App.css';
import data from './constant.json';
import EmployeeList from './components/EmployeeList/EmployeeList';

function App() {
  const [employeeData, setEmployeeData] = useState(data);

  return (
    <div>
      <h1>Employees</h1>
      <EmployeeList employeeData={employeeData} />
    </div>
  );
}

export default App;