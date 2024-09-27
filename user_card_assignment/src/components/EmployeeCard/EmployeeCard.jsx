import React from 'react';
import './EmployeeCard.css';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card-div">
      <div className="employee-avatar">
        <img src={employee.avatar} alt={employee.first_name} />
      </div>
      <div className="employee-info">
        <p className='employee-name'>{employee.first_name} {employee.last_name}</p>
        <p className='employee-email'>{employee.email}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;