import {
  VerbCollectionState,
  createDefaultVerbCollection,
} from './state.model';
import { ActionBase } from '../base';

export const verbCollectionReducer = (
  state: VerbCollectionState = createDefaultVerbCollection(),
  action: ActionBase
) => {
  return state;
};
