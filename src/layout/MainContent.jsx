import Register from '../components/Register';
import Cart from '../components/Cart';
import ProgressControl from '../components/step/ProgressControl';
export default function Main() {
  return (
    <>
      <main className="site-main">
        <div className="main-container">
          {/* register */}
          <Register/>
    
          {/* cart */}
          <Cart/>

          {/* progress-control */}
          <ProgressControl/>
        </div>
      </main>
    </>
  );
}
