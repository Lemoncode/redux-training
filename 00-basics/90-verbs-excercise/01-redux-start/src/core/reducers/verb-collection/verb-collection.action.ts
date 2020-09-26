import { actionIds } from '../action-ids';
import { ActionBase } from 'core/base';
import { VerbEntityState } from './verb-collection.state.model';
import { loadFullVerbCollection } from './verbs-list.api.state';

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
