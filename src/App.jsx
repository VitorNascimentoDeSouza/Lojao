import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import Header from './components/Header';
import MyRoutes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <MyRoutes />
      <ToastContainer autoClose={3000} position='top-right'/> 
    </BrowserRouter>
  );
}