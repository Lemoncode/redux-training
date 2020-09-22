import React from 'react';
import { VerbEntityGlobal } from './global-verbs.model';

interface GlobalVerbsContext {
  verbCollection: VerbEntityGlobal[];
  setVerbCollection: (verbCollection: VerbEntityGlobal[]) => void;
}

export const globalVerbsContext = React.createContext<GlobalVerbsContext>({
  verbCollection: [],
  setVerbCollection: value => {
    console.log('Global verb Context, forgot provider on top of root?');
  },
});

export const GlobalVerbsProvider: React.FC = props => {
  const [verbCollection, setVerbCollection] = React.useState<
    VerbEntityGlobal[]
  >([]);

  return (
    <globalVerbsContext.Provider value={{ verbCollection, setVerbCollection }}>
      {props.children}
    </globalVerbsContext.Provider>
  );
};
