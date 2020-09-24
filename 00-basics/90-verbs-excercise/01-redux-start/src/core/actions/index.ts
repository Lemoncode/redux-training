export * from './ids';
import { actionIds } from './ids';
import { ActionBase } from '../base';
import { VerbEntityState } from '../reducers';
import { loadFullVerbCollection } from '../api/verbs-list.api.state';

export const LoadFullListOfVerbsRequestStart = () => dispatcher => {
  const promise = loadFullVerbCollection();

  promise.then(data => dispatcher(LoadFullListOfVerbsRequestCompleted(data)));

  return promise;
};

export const LoadFullListOfVerbsRequestCompleted = (
  verbCollection: VerbEntityState[]
): ActionBase => ({
  type: actionIds.setVerbsCollectionRequestCompleted,
  payload: verbCollection,
});
