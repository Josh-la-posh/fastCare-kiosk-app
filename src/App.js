import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { OutstandingInvoice } from './pages/outstandingInvoice/OutstandingInvoice';
import { PatientNumber } from './pages/patientNumber/PatientNumber';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home />}/>
        <Route path='/pnum' element={<PatientNumber />}/>
        <Route path='/outinvoice' element={<OutstandingInvoice />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
