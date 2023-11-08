import { AuthProvider } from './contexts/AuthContext';

import MainRoutes from './routes/routes';

import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.min.css"

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <MainRoutes />
    </AuthProvider>
  );
}

export default App;