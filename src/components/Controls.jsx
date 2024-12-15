const Controls = ({ onSort, onSearch, onFilterByDepartment, toggleModal, isSorted }) => (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <button
        onClick={onSort}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-200"
      >
        Sort by Name {isSorted ? '↓' : '↑'}
      </button>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => onSearch(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Filter by department"
        onChange={(e) => onFilterByDepartment(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        onClick={toggleModal}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 transition duration-200"
      >
        Add New Employee
      </button>
    </div>
  );
  
  export default Controls;
  