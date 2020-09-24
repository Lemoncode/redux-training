import * as state from 'core/reducers/state.model';
import * as vm from 'core/verbs';

export const mapVerbFromStateToVm = (
  apiEntry: state.VerbEntityState
): vm.VerbEntityGlobal => ({
  ...apiEntry,
});

export const mapVerbCollectionFromStateToVm = (
  apiVerbCollection: state.VerbEntityState[]
): vm.VerbEntityGlobal[] => apiVerbCollection.map(mapVerbFromStateToVm);
