import { AppRegistry } from 'react-native';
import App from '.';

interface WebappRootTag {
  __webappRootTag?: HTMLElement;
  document: Document & any  ;
}

type GlobalType = NodeJS.Global & typeof globalThis & WebappRootTag;

const globalAny = global as GlobalType;
const rootTag = globalAny.document.getElementById('root');

const mount = (tag: HTMLElement): void => {
  globalAny.__webappRootTag = tag;
  AppRegistry.registerComponent('reanimated-burger-menu', () => App);
  AppRegistry.runApplication('reanimated-burger-menu', {
    rootTag: tag,
  });
};

if (rootTag) {
  mount(rootTag);
}

export { mount };
