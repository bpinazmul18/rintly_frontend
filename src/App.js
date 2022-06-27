import './App.css';
import { ToastContainer } from 'react-toastify';
import Counters from './components/counters';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <Counters/>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
        <ToastContainer />
    </div>
  );
}

export default App;
