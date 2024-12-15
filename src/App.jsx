import './App.css';
import { useState, useEffect } from 'react';
import Controls from './components/Controls';
import EmployeeTable from './components/EmployeeTable';
import EmployeeModal from './components/EmployeeModal';
import { loadEmployeesFromStorage, saveEmployeesToStorage, filterEmployees } from './utils/utils';

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isJsonLoaded = localStorage.getItem('jsonLoaded');

    if (!isJsonLoaded) {
      const fetchEmployees = async () => {
        try {
          const response = await fetch('/assets/employees.json');
          if (!response.ok) throw new Error('Failed to fetch employee data');
          const jsonEmployees = await response.json();

          saveEmployeesToStorage(jsonEmployees);
          localStorage.setItem('jsonLoaded', 'true');
          setEmployees(jsonEmployees);
          setFilteredEmployees(jsonEmployees);
        } catch (error) {
          console.error('Error loading employees:', error);
        }
      };

      fetchEmployees();
    } else {
      const localEmployees = loadEmployeesFromStorage() || [];
      setEmployees(localEmployees);
      setFilteredEmployees(localEmployees);
    }
  }, []);

  const toggleModal = () => setShowModal(!showModal);

  const handleAddEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    setFilteredEmployees(filterEmployees(updatedEmployees, searchTerm, departmentFilter, isSorted));
    saveEmployeesToStorage(updatedEmployees);
    toggleModal();
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setFilteredEmployees(filterEmployees(employees, term, departmentFilter, isSorted));
  };

  const handleFilterByDepartment = (department) => {
    setDepartmentFilter(department);
    setFilteredEmployees(filterEmployees(employees, searchTerm, department, isSorted));
  };

  const sortByName = () => {
    const sorted = [...filteredEmployees].sort((a, b) =>
      isSorted ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    );
  
    setFilteredEmployees(sorted);
    setIsSorted(!isSorted);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Employee Management Tool
        </h1>
        <Controls
          onSort={sortByName}
          onSearch={handleSearch}
          onFilterByDepartment={handleFilterByDepartment}
          toggleModal={toggleModal}
          isSorted={isSorted}
        />
        <EmployeeTable employees={filteredEmployees} />
      </div>
      {showModal && <EmployeeModal onClose={toggleModal} onSave={handleAddEmployee} />}
    </div>
  );
}

export default App;
