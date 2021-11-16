import {
  interpolateColor,
  interpolate,
  useAnimatedProps,
  useDerivedValue,
} from 'react-native-reanimated';
import { createPath, addCurve, interpolatePath } from 'react-native-redash';
import type { UseGetAnimatedProps } from '../types';

export const useGetAnimatedPropsSecondLine = ({
  dimensions,
  offset,
  fill,
  animationClock,
  animationType,
}: UseGetAnimatedProps): Record<string, any> => {
  const isAnimationTypeSlider = useDerivedValue(() => animationType === 'slider', [animationType]);
  const isAnimationTypeBoring = useDerivedValue(() => animationType === 'boring', [animationType]);

  return useAnimatedProps(() => {
    'worklet';

    const { height, width } = dimensions;
    const startX = width / 2;
    const startY = height / 2;
    const x_offset = width / 2.5;
    const x_dissapear = width / 4;

    const straightArrow = createPath({ x: startX - x_offset, y: startY + offset });
    addCurve(straightArrow, {
      to: { x: startX + x_offset, y: startY + offset },
      c1: { x: startX - x_offset, y: startY + offset },
      c2: { x: startX + x_offset, y: startY + offset },
    });

    const dissapearArrow = createPath({ x: x_dissapear - x_offset, y: startY + offset });
    addCurve(dissapearArrow, {
      to: { x: x_dissapear + x_offset, y: startY + offset },
      c1: { x: x_dissapear - x_offset, y: startY + offset },
      c2: { x: x_dissapear + x_offset, y: startY + offset },
    });

    return {
      stroke: isAnimationTypeBoring.value
        ? interpolateColor(animationClock.value, [0, 5, 20], [fill, 'transparent', 'transparent'])
        : interpolateColor(animationClock.value, [0, 18, 20], [fill, fill, 'transparent']),
      strokeWidth: isAnimationTypeBoring.value
        ? interpolate(animationClock.value, [0, 1, 20], [5, 0, 0])
        : interpolate(animationClock.value, [0, 20], [5, 0]),
      d: interpolatePath(
        animationClock.value,
        [0, 20],
        [straightArrow, isAnimationTypeSlider.value ? dissapearArrow : straightArrow],
      ),
    };
  });
};
