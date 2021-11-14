import {  useAnimatedProps } from 'react-native-reanimated';
import { createPath, addCurve, interpolatePath } from 'react-native-redash';

const START_Y = 30;
const X_OFFSET = 18;
const Y_OFFSET = 10;
const EDGE_OFFSET = 5;

export const useGetAnimatedProps = ({ width, offset, animationClock }) => useAnimatedProps(() => {
  'worklet';

  const startX = width / 2;

  const upArrow = createPath({ x: startX - X_OFFSET, y: START_Y + offset });
  addCurve(upArrow, {
    to: { x: startX + X_OFFSET, y: START_Y + offset },
    c1: { x: startX + EDGE_OFFSET, y: Y_OFFSET + offset },
    c2: { x: startX - EDGE_OFFSET, y: Y_OFFSET + offset },
  });

  const straightArrow = createPath({ x: startX - X_OFFSET, y: START_Y + offset });
  addCurve(straightArrow, {
    to: { x: startX + X_OFFSET, y: START_Y + offset },
    c1: { x: startX - X_OFFSET, y: START_Y + offset },
    c2: { x: startX + X_OFFSET, y: START_Y + offset },
  });

  return {
    d: interpolatePath(animationClock.value, [0, 20], [straightArrow, upArrow]),
  };
});