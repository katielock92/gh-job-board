import React, { createContext, useContext, useState } from 'react';

const DepartmentContext = createContext();

export function DepartmentProvider({ children }) {
  const [selectedDepartment, setSelectedDepartment] = useState('All departments');

  return (
    <DepartmentContext.Provider value={{ selectedDepartment, setSelectedDepartment }}>
      {children}
    </DepartmentContext.Provider>
  );
}

export function useDepartment() {
  return useContext(DepartmentContext);
}