import Animated from "react-native-reanimated";

export interface UseGetAnimatedProps {
  dimensions: {
    width: number;
    height: number;
  },
  offset: number,
  fill: string;
  animationClock: Animated.SharedValue<number>;
  animationType?: string;
}