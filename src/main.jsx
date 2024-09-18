import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Week1Table from './Week1Table.jsx';
import ClassTable from './ClassTable.jsx';
// import ArrayMethods from './ArrayMethods.jsx'
// import BootstrapComponent from './BootstrapComponent.jsx';
// import DataTable from './DataTable.jsx';
// import ComponentProps from './ComponentProps.jsx';
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BootstrapComponent /> */}
    {/* <ArrayMethods /> */}
    {/* <ComponentProps /> */}
    {/* <DataTable /> */}
    <ClassTable />
  </StrictMode>
);
