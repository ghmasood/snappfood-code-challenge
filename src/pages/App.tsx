import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import 'assets/styles/globals.scss';
import { store } from 'store';

import router from './router';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
