import * as state from 'core/reducers';
import * as vm from './configure-verbs.vm';

const mapFromVerbFromGlobalToVm = (
  verb: state.VerbEntityState,
  selection: string[]
): vm.VerbEntity => ({
  selected: selection.findIndex(v => v === verb.infinitive) !== -1,
  verbKey: verb.infinitive,
  verbDescription: `${verb.infinitive} / ${verb.past} /${verb.participle} / ${verb.translation}`,
});

export const mapFromVerbCollectionFromGlobalToVm = (
  collection: state.VerbCollectionState,
  selection: string[]
): vm.VerbEntity[] =>
  collection.map(item => mapFromVerbFromGlobalToVm(item, selection));
