import React from 'react';
import MorphingArrow from './examples/MorphingArrow';
import 'setimmediate'

if (!global.setImmediate) {
  global.setImmediate = setTimeout;
}

const App: React.FC = () => <MorphingArrow />;

export default App;
