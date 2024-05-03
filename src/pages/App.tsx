import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from 'store';

import router from './router';

import 'assets/styles/globals.scss';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
