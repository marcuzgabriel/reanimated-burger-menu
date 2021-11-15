import { interpolateColor, interpolate, useAnimatedProps } from 'react-native-reanimated';
import { createPath, addCurve, interpolatePath } from 'react-native-redash';
import type { UseGetAnimatedProps } from '../types';

export const useGetAnimatedPropsSecondLine = ({
  dimensions,
  offset,
  fill,
  animationClock,
  animationType,
}: UseGetAnimatedProps): Record<string, any> =>
  useAnimatedProps(() => {
    'worklet';

    const { height, width } = dimensions;
    const startX = width / 2;
    const startY = height / 2;
    const x_offset = width >= 50 ? width / 4 : width / 6;
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
      stroke: interpolateColor(animationClock.value, [0, 18, 20], [fill, fill, 'transparent']),
      strokeWidth: interpolate(animationClock.value, [0, 20], [5, 0]),
      d: interpolatePath(
        animationClock.value,
        [0, 20],
        [straightArrow, animationType === 'slider' ? dissapearArrow : straightArrow],
      ),
    };
  });
