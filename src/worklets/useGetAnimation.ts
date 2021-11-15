import { useCallback } from 'react';
import { withSpring, withTiming, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { DEFAULT_SPRING_CONFIG } from '../constants/animations';

const DEFAULT_ANIMATION_DURATION = 250;

interface UseGetAnimationProps {
  type: string;
  animationDuration?: number;
}

export const useGetAnimation = ({
  type,
  animationDuration: animationDurationSetting,
}: UseGetAnimationProps): Record<string, any> => {
  'worklet';

  const animationClock = useSharedValue(0);
  const translateX = useSharedValue(0);
  const rotation = useSharedValue(0);
  const animationDuration = useDerivedValue(
    () => animationDurationSetting ?? DEFAULT_ANIMATION_DURATION,
    [animationDurationSetting],
  );

  const animation = useCallback(() => {
    switch (type) {
      case 'elasticRotation': {
        animationClock.value = withTiming(animationClock.value === 0 ? 20 : 0, {
          duration: animationDuration.value,
        });
        rotation.value = withSpring(animationClock.value === 0 ? 360 : 0, DEFAULT_SPRING_CONFIG);
        break;
      }

      case 'normalRotation': {
        animationClock.value = withTiming(animationClock.value === 0 ? 20 : 0, {
          duration: animationDuration.value,
        });
        rotation.value = withTiming(animationClock.value === 0 ? 360 : 0, {
          duration: animationDuration.value,
        });
        break;
      }

      case 'slider': {
        animationClock.value = withTiming(animationClock.value === 0 ? 20 : 0, {
          duration: animationDuration.value,
        });
        break;
      }

      case 'boring': {
        animationClock.value = withTiming(animationClock.value === 0 ? 20 : 0, {
          duration: animationDuration.value,
        });
        break;
      }

      default: {
        throw new Error('No animation type was given');
      }
    }
  }, [type, animationClock, animationDuration, rotation]);

  return {
    animationClock,
    translateX,
    rotation,
    animation,
  };
};
