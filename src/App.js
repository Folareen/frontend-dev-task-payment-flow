import "./styles/css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo";
import BillingInfo from "./pages/BillingInfo";
import ConfirmPayment from "./pages/ConfirmPayment";
import PaymentConfirmed from "./pages/PersonalInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/billing-info" element={<BillingInfo />} />
        <Route path="/confirm-payment" element={<ConfirmPayment />} />
        <Route path="/payment-confirmed" element={<PaymentConfirmed />} />
      </Routes>
    </Router>
  );
}

export default App;
