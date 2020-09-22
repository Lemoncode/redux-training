import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { ThemeProviderComponent } from 'core/theme';
import { GlobalVerbsProvider } from 'core/verbs';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <GlobalVerbsProvider>
        <RouterComponent />
      </GlobalVerbsProvider>
    </ThemeProviderComponent>
  );
};

export default hot(App);
