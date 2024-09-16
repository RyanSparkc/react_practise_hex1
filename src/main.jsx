import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Week1Table from './Week1Table.jsx';
// import ArrayMethods from './ArrayMethods.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Week1Table />
    {/* <ArrayMethods /> */}
  </StrictMode>
);
