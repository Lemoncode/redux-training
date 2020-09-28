import * as React from 'react';
import { useDispatch } from 'react-redux';
import { HomeComponent } from './home.component';
import { LoadFullListOfVerbsRequestStart } from 'core/actions';

export const HomeContainer = () => {
  const dispatch = useDispatch();

  const loadAllVerbs = async () => {
    dispatch(LoadFullListOfVerbsRequestStart());
  };

  // Let's load the full list of verbs
  React.useEffect(() => {
    loadAllVerbs();
  }, []);

  return <HomeComponent />;
};
