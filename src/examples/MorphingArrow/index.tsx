import React from 'react';
import styled from 'styled-components/native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { useGetAnimatedProps } from '../../worklets/useGetAnimatedProps';

const Wrapper = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

interface Props {
  scrollY?: Animated.SharedValue<number>;
  snapPointBottom: Animated.SharedValue<number>;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

const MorphingArrow: React.FC<Props> = () => {
  const animationClock = useSharedValue(0);
  const fill = 'black';

  const animatedPropsLineOne = useGetAnimatedProps({ width: 100, offset: 0, animationClock });
  const animatedPropsLineTwo = useGetAnimatedProps({ width: 100, offset: 12, animationClock });
  const animatedPropsLineThree = useGetAnimatedProps({ width: 100, offset: 24, animationClock });

  const animations = [
    animatedPropsLineOne,
    animatedPropsLineTwo,
    animatedPropsLineThree,
  ];

  // useEffect(() => {
  //   if (animationClock.value === 0) {
  //     animationClock.value = withTiming(20, { duration: 250 });
  //   }
  // }, [animationClock]);

  return (
    <Wrapper>
      <Svg width="100" height="100">
        {animations.map((animation, i) => (
        <AnimatedPath
          key={i}
          animatedProps={animation}
          stroke={fill}
          fill="none"
          fillRule="evenodd"
          strokeWidth="5"
          strokeLinecap="round"
        />
        ))}        
      </Svg>
    </Wrapper>
  );
};

export default MorphingArrow;
