import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllInvoice } from './pages/allInvoice/AllInvoice';
import { OutstandingInvoice } from './pages/outstandingInvoice/OutstandingInvoice';
import { PaidInvoice } from './pages/paidInvoice/PaidInvoice';
import { PatientNumber } from './pages/patientNumber/PatientNumber';
import { PaymentItems } from './pages/paymentItems/PaymentItems';
import { PaymentItemsViaWallet } from './pages/paymentItemsViaWallet/PaymentItemsViaWallet';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<PatientNumber />}/>
        <Route path='/outinvoice' element={<OutstandingInvoice />}/>
        <Route path='/allinvoice' element={<AllInvoice />}/>
        <Route path='/payitem/:id' element={<PaymentItems />}/>
        <Route path='/payviawallet' element={<PaymentItemsViaWallet />}/>
        <Route path='/paidinvoice' element={<PaidInvoice />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
