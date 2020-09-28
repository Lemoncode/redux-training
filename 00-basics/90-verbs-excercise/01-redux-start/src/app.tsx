import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { Provider } from 'react-redux';
import { ThemeProviderComponent } from 'core/theme';
import { ScoreProvider } from 'core/score';
import { store } from './store';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <ThemeProviderComponent>
        <ScoreProvider>
          <RouterComponent />
        </ScoreProvider>
      </ThemeProviderComponent>
    </Provider>
  );
};

export default hot(App);
