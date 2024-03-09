// Entry point for the build script in your package.json
// import '@hotwired/turbo-rails';
// import './controllers';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import setupStore from './redux/store';
import { fetchRandom } from './redux/greetings/greetingsActions';

const appStore = setupStore();

const rootTarget = document.getElementById('root');
const root = createRoot(rootTarget);

appStore.dispatch(fetchRandom());

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
