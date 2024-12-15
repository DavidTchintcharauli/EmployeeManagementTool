export const loadEmployeesFromStorage = () => JSON.parse(localStorage.getItem('employees'));
export const saveEmployeesToStorage = (employees) => localStorage.setItem('employees', JSON.stringify(employees));

export const filterEmployees = (employees, searchTerm, departmentFilter, isSorted) => {
  let filtered = employees;

  if (searchTerm) {
    filtered = filtered.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (departmentFilter) {
    filtered = filtered.filter((employee) =>
      employee.department.toLowerCase().includes(departmentFilter.toLowerCase())
    );
  }

  if (isSorted) {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }

  return filtered;
};
