import * as React from 'react';
import { HomeComponent } from './home.component';
import { loadFullVerbCollection } from './home.api.vm';
import { globalVerbsContext } from 'core/verbs';

export const HomeContainer = () => {
  const verbsContext = React.useContext(globalVerbsContext);

  const loadAllVerbs = async () => {
    const fullVerbCollection = await loadFullVerbCollection();
    verbsContext.setVerbCollection(fullVerbCollection);
  };

  // Let's load the full list of verbs
  React.useEffect(() => {
    loadAllVerbs();
  }, []);

  return <HomeComponent />;
};
