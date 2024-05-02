import 'assets/styles/globals.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux';
import { store } from 'store';
import ENV from 'utils/environments';

function App() {
  console.log(`MODE: ${ENV.MODE}`);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
