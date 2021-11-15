import React from 'react';
import Examples from './Examples';
import { BurgerMenu } from './ReanimatedBurgerMenu';

import 'setimmediate';

if (!global.setImmediate) {
  global.setImmediate = setTimeout as any;
}

const App: React.FC = () => <BurgerMenu />;

export default App;
