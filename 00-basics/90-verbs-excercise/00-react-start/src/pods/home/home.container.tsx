import * as React from 'react';
import { HomeComponent } from './home.component';
import { loadFullVerbCollection } from './home.api.vm';
import { globalVerbsContext } from 'core/verbs';

export const HomeContainer = () => {
  const verbsContext = React.useContext(globalVerbsContext);

  const loadAllVerbs = async () => {
    const fullVerbCollection = await loadFullVerbCollection();
    verbsContext.setVerbCollection(fullVerbCollection);

    // TODO: store this in local storage
    verbsContext.setSelectedVerbs([
      'bear',
      'beat',
      'become',
      'begin',
      'bite',
      'blow',
      'break',
      'bring',
      'build',
      'burn',
      'burst',
      'buy',
      'catch',
      'choose',
      'come',
      'cost',
      'cut',
      'deal',
      'dig',
      'do',
      'draw',
      'dream',
      'drink',
      'drive',
      'eat',
      'fall',
      'feed',
      'fight',
      'find',
      'fly',
      'forbid',
      'forget',
      'forgive',
      'freeze',
      'get',
      'give',
      'go',
      'grow',
      'hang',
      'have',
      'hear',
      'hide',
      'hit',
      'hold',
      'hurt',
      'keep',
      'know',
      'lead',
      'learn',
      'leave',
      'lend',
      'let',
      'light',
      'lose',
      'make',
      'mean',
      'meet',
      'pay',
      'put',
      'read',
      'ride',
      'ring',
      'rise',
      'run',
      'say',
      'see',
      'sell',
      'send',
      'set',
      'sew',
      'shake',
      'shine',
      'shoot',
      'show',
      'shut',
      'sing',
      'sit',
      'sleep',
      'smell',
      'speak',
      'spend',
      'stand',
      'steal',
      'stick',
      'sting',
      'swear',
      'sweep',
      'swim',
      'take',
      'teach',
      'tear',
      'tell',
      'think',
      'throw',
      'understand',
      'wake',
      'wear',
      'win',
      'write',
    ]);
  };

  // Let's load the full list of verbs
  React.useEffect(() => {
    loadAllVerbs();
  }, []);

  return <HomeComponent />;
};
