import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import TimeTable from './components/TimeTable';
function App() {
  return (
    <>
    <TimeTable/>
    <ToastContainer/>
    </>
  );
}

export default App;
