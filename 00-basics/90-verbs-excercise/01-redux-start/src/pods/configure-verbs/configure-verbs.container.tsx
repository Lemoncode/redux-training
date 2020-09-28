import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { VerbEntity } from './configure-verbs.vm';
import { mapFromVerbCollectionFromGlobalToVm } from './configure-verbs.mapper';
import { ConfigureVerbsComponent } from './configure-verbs.component';
import { routes } from 'core/router';
import { selectVerbCollection } from './configure-verbs.selector';
import { setVerbCollectionSelection } from 'core/actions';

export const ConfigureVerbsContainer = () => {
  const history = useHistory();

  const verbsCollection = useSelector(selectVerbCollection);
  const dispatch = useDispatch();

  const handleSave = (verbs: VerbEntity[]) => {
    const selectionKeys = verbs.reduce(
      (acc, item) => (item.selected ? [...acc, item.verbKey] : acc),
      []
    );

    // TODO Dispatch and action to update the selected verb reducer
    //verbsContext.setSelectedVerbs(selectionKeys);
    dispatch(setVerbCollectionSelection(selectionKeys))
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
