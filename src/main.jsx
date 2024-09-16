import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DataTable from './DataTable.jsx';
// import ArrayMethods from './ArrayMethods.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataTable />
    {/* <ArrayMethods /> */}
  </StrictMode>
);
