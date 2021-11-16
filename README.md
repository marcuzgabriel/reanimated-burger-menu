![TypeScript](https://badges.aleen42.com/src/typescript.svg)![React](https://badges.aleen42.com/src/react.svg)![Javascript](https://badges.aleen42.com/src/javascript.svg)

## Morphing SVG hamburger menus
Easy customizable ham burger menus for react native and react native web based on react-native-redash and react-native-reanimated.
https://marcuzgabriel.github.io/reanimated-burger-menu/

## Props
```Javascript
<BurgerMenu
  type="boring" // -> string
  runAnimation={true} // -> Trigger effect to run animation without pressing the button
  onPress={(): any => undefined} // -> Animation runs together with callback
  color="black" // -> string
  scale={1} // -> number
  dimensions={24} // -> number
  itemOffset={10} // -> number
  animationDuration={250} // -> number
  waitForAnimation={{
    isReady: boolean, // -> Wait for another animation to be done. This help to control on press activity. Example will come soon.
  }}
/>
```
