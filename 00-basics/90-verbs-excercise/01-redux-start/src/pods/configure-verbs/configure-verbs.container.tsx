import * as React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { VerbEntity } from './configure-verbs.vm';
import { mapFromVerbCollectionFromGlobalToVm } from './configure-verbs.mapper';
import { ConfigureVerbsComponent } from './configure-verbs.component';
import { routes } from 'core/router';
import { selectVerbCollection } from './configuer-verbs.selector';

export const ConfigureVerbsContainer = () => {
  const history = useHistory();
  //const verbsContext = React.useContext(globalVerbsContext);
  //const [verbsCollection, setVerbsCollection] = React.useState<VerbEntity[]>(
  //  []
  //);

  const verbsCollection = useSelector(selectVerbCollection);
  /*
  React.useEffect(() => {
    const verbs = mapFromVerbCollectionFromGlobalToVm(
      verbsContext.verbCollection,
      verbsContext.selectedVerbs
    );
    setVerbsCollection(verbs);
  }, []);
*/

  const handleSave = (verbs: VerbEntity[]) => {
    const selectionKeys = verbs.reduce(
      (acc, item) => (item.selected ? [...acc, item.verbKey] : acc),
      []
    );

    // TODO Dispatch and action to update the selected verb reducer
    //verbsContext.setSelectedVerbs(selectionKeys);
    history.push(routes.root);
  };

  const handleCancel = () => {
    history.push(routes.root);
  };

  return (
    <ConfigureVerbsComponent
      verbCollection={verbsCollection}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};
