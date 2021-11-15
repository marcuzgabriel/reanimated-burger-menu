import { useCallback } from 'react';
import { withSpring, withTiming, useSharedValue } from 'react-native-reanimated';
import { DEFAULT_SPRING_CONFIG } from '../constants/animations';

interface UseGetAnimationProps {
  type: string;
}

export const useGetAnimation = ({ type }: UseGetAnimationProps): Record<string, any> => {
  'worklet';

  const animationClock = useSharedValue(0);
  const translateX = useSharedValue(0);
  const rotation = useSharedValue(0);

  const animation = useCallback(() => {
    switch (type) {
      case 'elasticRotation': {
        animationClock.value = withTiming(animationClock.value === 0 ? 20 : 0, { duration: 250 });
        rotation.value = withSpring(animationClock.value === 0 ? 360 : 0, DEFAULT_SPRING_CONFIG);
        break;
      }

      case 'slider': {
        animationClock.value = withTiming(animationClock.value === 0 ? 20 : 0, { duration: 250 });
        break;
      }

      default: {
        throw new Error('No animation type was given');
      }
    }
  }, [type, animationClock, rotation]);

  return {
    animationClock,
    translateX,
    rotation,
    animation,
  };
};
