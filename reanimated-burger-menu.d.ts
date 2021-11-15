// Project: https://github.com/marcuzgabriel/reanimated-burger-menu
// Typescript Version: 3.7.4

declare module '@marcuzgabriel/reanimated-burger-menu' {
  import React from 'react';
  import Animated from 'react-native-reanimated';
  export interface BurgerMenuProps {
    scale?: number;
    color?: string;
    type?: string;
    itemOffset?: number;
    animationDuration?: number;
  }

  export interface UseGetAnimatedProps {
    dimensions: {
      width: number;
      height: number;
    };
    offset: number;
    fill: string;
    animationClock: Animated.SharedValue<number>;
    animationType?: string;
  }

  export function BurgerMenu<P extends BurgerMenuProps>(props: P): React.ReactElement<P>;
}
