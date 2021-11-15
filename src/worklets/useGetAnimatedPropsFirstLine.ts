import { interpolateColor, interpolate, useAnimatedProps } from 'react-native-reanimated';
import { createPath, addCurve, interpolatePath } from 'react-native-redash';
import type { UseGetAnimatedProps } from '../types';

export const useGetAnimatedPropsFirstLine = ({
  dimensions,
  offset,
  fill,
  animationClock,
}: UseGetAnimatedProps): Record<string, any> =>
  useAnimatedProps(() => {
    'worklet';

    const { height, width } = dimensions;

    const startX = width / 2;
    const startY = height / 2;
    const x_offset = width >= 50 ? width / 4 : width / 6;

    const directional_offset = width / 6;

    const straightArrow = createPath({ x: startX - x_offset, y: startY + offset });
    addCurve(straightArrow, {
      c1: { x: startX - x_offset, y: startY + offset },
      c2: { x: startX + x_offset, y: startY + offset },
      to: { x: startX + x_offset, y: startY + offset },
    });

    const directionalArrow = createPath({
      x: startX - directional_offset,
      y: startY + directional_offset,
    });
    addCurve(directionalArrow, {
      c1: { x: startX - directional_offset, y: startY + directional_offset },
      c2: { x: startX + directional_offset, y: startY - directional_offset },
      to: { x: startX + directional_offset, y: startY - directional_offset },
    });

    return {
      stroke: interpolateColor(animationClock.value, [0, 20], [fill, fill]),
      strokeWidth: interpolate(animationClock.value, [0, 20], [5, 5]),
      d: interpolatePath(animationClock.value, [0, 20], [straightArrow, directionalArrow]),
    };
  });
