import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import Animated, { withSpring, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_SPRING_CONFIG } from '../../constants/animations';
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

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedPath = Animated.createAnimatedComponent(Path);

const MorphingArrow: React.FC<Props> = () => {
  const animationClock = useSharedValue(0);
  const rotation = useSharedValue(0);
  const fill = 'black';

  const animatedPropsLineOne = useGetAnimatedProps({ width: 100, fill, offset: 0, animationClock });
  const animatedPropsLineTwo = useGetAnimatedProps({ width: 100, fill, offset: 12, animationClock });
  const animatedPropsLineThree = useGetAnimatedProps({ width: 100, fill, offset: 24, animationClock });

  const animations = [
    animatedPropsLineOne,
    animatedPropsLineTwo,
    animatedPropsLineThree,
  ];

  const rotationStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  useEffect(() => {
    if (animationClock.value === 0) {
      animationClock.value = withTiming(20, { duration: 250 });
      rotation.value = withSpring(360, DEFAULT_SPRING_CONFIG);
    }
  }, [animationClock]);

  return (
    <Wrapper>
      <Animated.View style={rotationStyle}>
        <AnimatedSvg width="100" height="100">
          {animations.map((animation, i) => (
          <AnimatedPath
            key={i}
            animatedProps={animation}
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
          />
          ))}        
        </AnimatedSvg>
      </Animated.View>
    </Wrapper>
  );
};

export default MorphingArrow;
