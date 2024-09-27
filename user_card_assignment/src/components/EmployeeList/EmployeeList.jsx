import React from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import './EmployeeList.css';

const EmployeeList = ({ employeeData }) => {
  return (
    <div className='employee-list-container'>
      {employeeData.map((employee) => (
        <EmployeeCard employee={employee} key={employee.id} />
      ))}
    </div>
  );
};

export default EmployeeList;