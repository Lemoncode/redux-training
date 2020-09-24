import * as stateModel from '../reducers';
import * as api from './verbs-list.api';

const mapVerbFromApiToVm = (
  apiEntry: api.VerbEntityApi
): stateModel.VerbEntityState => ({
  ...apiEntry,
});

const mapVerbCollectionFromApiToVm = (
  apiVerbCollection: api.VerbEntityApi[]
): stateModel.VerbEntityState[] => apiVerbCollection.map(mapVerbFromApiToVm);

export const loadFullVerbCollection = async (): Promise<stateModel.VerbEntityState[]> => {
  const verbCollection = await api.loadFullVerbCollection();
  return mapVerbCollectionFromApiToVm(verbCollection);
};
