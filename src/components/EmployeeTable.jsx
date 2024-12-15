const EmployeeTable = ({ employees }) => (
    <>
      <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700 border-b-2 border-gray-300 pb-2 mb-4">
        <div className="text-center">Name</div>
        <div className="text-center">Department</div>
        <div className="text-center">Role</div>
      </div>
      {employees.length > 0 ? (
        <div className="divide-y divide-gray-300">
          {employees.map((employee, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 py-4 px-2 text-center hover:bg-gray-50 rounded-md"
            >
              <div className="font-medium text-gray-800">{employee.name}</div>
              <div className="text-gray-600">{employee.department}</div>
              <div className="text-gray-500">{employee.role}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 font-semibold">No match found</p>
      )}
    </>
  );
  
  export default EmployeeTable;
  