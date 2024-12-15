# Employee Management Tool
## Table of Contents
- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Development Server](#development-server)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Contributing](#contributing)
- [License](#license)

## Overview
A simple and intuitive Employee Management Tool built with React and Vite. This tool allows users to manage employee data, including adding, searching, and filtering employees by name and department. It also provides sorting functionality and stores the employee data in `localStorage` for persistence. The tool is designed for HR departments or small businesses to easily manage and track employee information.

## Features
This Employee Management Tool provides:
- **Comprehensive Employee List**: View employee details such as name, department, and role.
- **Search Functionality**: Quickly locate employees by name.
- **Departmental Filters**: Narrow down the employee list based on departments.
- **Sorting Options**: Organize employees alphabetically, either ascending or descending.
- **Employee Registration**: Easily add new employees via a user-friendly modal form.
- **Data Persistence**: Automatically saves employee data to `localStorage`, ensuring no data loss on page refresh.


## File Structure

  ```plaintext
EmployeeManagementTool/
├── public/
│   └──assets
│      └── employees.json     # Sample employee data for initial load
├── src/
│   ├── components/
│       ├── Controls.jsx      # Handles search, filter, and sort functionality
│       ├── EmployeeModal.jsx # Modal dialog for adding new employees
│       └── EmployeeTable.jsx # Displays the employee list in a tabular format
│   ├── utils/
│       └── utils.js          # Helper functions for data management and transformations
│   ├── App.css               # Global application styles
│   ├── App.jsx               # Root React component
│   ├── index.css             # Base styles for the project
│   └── main.jsx              # Entry point of the React application
```
## Installation

**To get started with the project locally, follow these steps:**

1. **Clone the repository:**

    ```bash 
    git clone <https://github.com/DavidTchintcharauli/EmployeeManagementTool.git>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd EmployeeManagementTool
    ```

3. **Install the project dependencies:**
   ```bash
   npm install
   ```
   Or, if you're using Yarn 
   ```bash
   yarn install
   ```

## Development Server
  1. **Run the development server using the following command:**
  
   ```bash
   npm run dev
   ```
  Or with Yarn
   ```bash
   yarn dev
   ```
  2. **Navigate to http://localhost:5173// in your browser.**

## Demo
  **You can see a live demo of the project:** 
    - <https://employee-management-tool-ruddy.vercel.app/>

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern build tool that offers fast build times and hot module replacement.
- **Tailwind CSS**: A utility-first CSS framework used for styling.
- **localStorage**: For saving and retrieving employee data in the browser.

### Prerequisites

Make sure you have the following installed before running the project:
- [Node.js](https://nodejs.org/) (>= v14.x.x)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Contributing
 Feel free to fork this repository and submit issues or pull requests if you'd like to contribute. All contributions are welcome! 
  1. **Fork the repository**
  2. **Create your feature branch**
  
   ```bash
   git checkout -b feature-branch
  ```
  3. **Commit your changes**
     
  ```bash
  git commit -m 'Add new feature'
   ```
   4. **Push to the branch**
     
  ```bash
  git push origin feature-branch
  ```
  5. **Create a new Pull Request**

## License

This project is licensed under the MIT License - see the LICENSE file for details.

### Key Additions:
- **Project Overview**: A brief introduction to help users understand the app’s purpose.
- **Demo Link**: Provided the link for the live demo.
- **Contribution Guidelines**: For users who want to contribute.
- **License**: Added a section for the MIT license (if you're using it).
- **File Structure**: Clarified each file's role in the project.

These updates should make your README even more complete and user-friendly. Let me know if you have any other changes or need further clarification!

