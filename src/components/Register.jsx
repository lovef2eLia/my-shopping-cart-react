import Progress from './step/Progress';
import AddressPhase from './step/AddressPhase';
import ShippingPhase from './step/ShippingPhase';
import CreditCardPhase from './step/CreditCardPhase';

export default function Register() {
  return (
    <>
      {/* register */}
      <section
        className="register-container col col-lg-6 col-sm-12"
        data-phase={1}
        data-total-price={0}
      >
        {/* register-title */}
        <h2 className="register-title col col-12">結帳</h2>
        {/* register-progress-status-bar */}
        <Progress/>
        {/* register-form */}
        <section className="form-container col col-12">
          {/* address phase */}
          <AddressPhase/>
          {/* shipping phase */}
          <ShippingPhase/>
          {/* credit-card phase */}
          <CreditCardPhase/>
        </section>
      </section>
    </>
  );
}