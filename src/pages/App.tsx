import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from 'store';

import router from './router';

import 'assets/styles/globals.scss';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer limit={3} newestOnTop />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
