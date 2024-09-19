import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Week1Table from './Week1Table.jsx';
import Week2Table from './Week2Table.jsx';
// import ClassTable from './ClassTable.jsx';
// import ArrayMethods from './ArrayMethods.jsx'
// import BootstrapComponent from './BootstrapComponent.jsx';
// import DataTable from './DataTable.jsx';
// import ComponentProps from './ComponentProps.jsx';
// import './index.css'
// import AsyncAxios from './AsyncAxios.jsx';
// import SummitForm from './SummitForm.jsx';
import Todo from './Todo.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Week2Table />
    {/* <BootstrapComponent /> */}
    {/* <ArrayMethods /> */}
    {/* <ComponentProps /> */}
    {/* <DataTable /> */}
    {/* <ClassTable /> */}

    {/* <AsyncAxios /> */}
    {/* <SummitForm /> */}
    {/* <Todo /> */}
  </StrictMode>
);
