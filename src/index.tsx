import React from 'react';
import Examples from './Examples';

import 'setimmediate';

if (!global.setImmediate) {
  global.setImmediate = setTimeout as any;
}

const App: React.FC = () => <Examples />;

export default App;
