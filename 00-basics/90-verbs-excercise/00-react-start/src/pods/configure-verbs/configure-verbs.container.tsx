import * as React from 'react';
import { globalVerbsContext } from 'core/verbs';
import { VerbEntity } from './configure-verbs.vm';
import { mapFromVerbCollectionFromGlobalToVm } from './configure-verbs.mapper';
import { ConfigureVerbsComponent } from './configure-verbs.component';

export const ConfigureVerbsContainer = () => {
  const verbsContext = React.useContext(globalVerbsContext);
  const [verbsCollection, setVerbsCollection] = React.useState<VerbEntity[]>(
    []
  );

  React.useEffect(() => {
    const verbs = mapFromVerbCollectionFromGlobalToVm(
      verbsContext.verbCollection,
      verbsContext.selectedVerbs
    );
    setVerbsCollection(verbs);
  }, []);

  const handleSave = (verbs: VerbEntity[]) => {
    const selectionKeys = verbs.reduce(
      (acc, item) => (item.selected ? [...acc, item.verbKey] : acc),
      []
    );

    verbsContext.setSelectedVerbs(selectionKeys);
  };

  return (
    <ConfigureVerbsComponent
      verbCollection={verbsCollection}
      onSave={handleSave}
    />
  );
};
