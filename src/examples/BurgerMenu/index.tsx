import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import {
  useGetAnimatedPropsFirstLine,
  useGetAnimatedPropsSecondLine,
  useGetAnimatedPropsThirdLine,
  useGetAnimation,
} from '../../worklets';

const HEIGHT = 100;
const WIDTH = 100;
const SCALE = 1;
const ITEM_OFFSET = 15;
const COLOR = 'black';
const DEFAULT_ANIMATION = 'elasticRotation';

interface BurgerMenuProps {
  scale?: number;
  color?: string;
  type?: string;
  itemOffset?: number;
}

const TouchableOpacity = styled.TouchableOpacity<{ scale: number }>`
  transform: ${({ scale }): string => `scale(${scale}`};
`;

const Wrapper = styled.View`
  height: ${HEIGHT}px;
  width: ${WIDTH}px;
`;

const AnimatedPath = Animated.createAnimatedComponent(Path);

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  scale: scaleSetting,
  color: colorSetting,
  type: typeSetting,
  itemOffset: itemOffsetSettings,
}) => {
  const { animationClock, rotation, animation } = useGetAnimation({
    type: typeSetting ?? DEFAULT_ANIMATION,
  });

  const fill = colorSetting ?? COLOR;
  const scale = scaleSetting ?? SCALE;
  const itemOffset = itemOffsetSettings ?? ITEM_OFFSET;

  const animatedPropsLineOne = useGetAnimatedPropsFirstLine({
    dimensions: { width: WIDTH, height: HEIGHT },
    fill,
    offset: -itemOffset,
    animationClock,
    animationType: typeSetting,
  });
  const animatedPropsLineTwo = useGetAnimatedPropsSecondLine({
    dimensions: { width: WIDTH, height: HEIGHT },
    fill,
    offset: 0,
    animationClock,
    animationType: typeSetting,
  });
  const animatedPropsLineThree = useGetAnimatedPropsThirdLine({
    dimensions: { width: WIDTH, height: HEIGHT },
    fill,
    offset: itemOffset,
    animationClock,
    animationType: typeSetting,
  });

  const animationPaths = [animatedPropsLineOne, animatedPropsLineTwo, animatedPropsLineThree];

  const rotationStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const onPressCallback = useCallback(() => {
    animation();
  }, []);

  return (
    <Wrapper>
      <TouchableOpacity onPress={onPressCallback} scale={scale}>
        <Animated.View style={rotationStyle}>
          <Svg width={HEIGHT} height={WIDTH}>
            {animationPaths.map((animationPath, i) => (
              <AnimatedPath
                key={i}
                animatedProps={animationPath}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
              />
            ))}
          </Svg>
        </Animated.View>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default BurgerMenu;
