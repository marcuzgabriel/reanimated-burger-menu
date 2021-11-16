import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import Animated, { useAnimatedReaction, useAnimatedStyle } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import {
  useGetAnimatedPropsFirstLine,
  useGetAnimatedPropsSecondLine,
  useGetAnimatedPropsThirdLine,
  useGetAnimation,
} from '../worklets';

const HEIGHT = 50;
const WIDTH = 50;
const SCALE = 1;
const ITEM_OFFSET = 15;
const COLOR = 'black';
const DEFAULT_ANIMATION = 'elasticRotation';

interface BurgerMenuProps {
  scale?: number;
  color?: string;
  type?: string;
  dimensions?: number;
  itemOffset?: number;
  animationDuration?: number;
  runAnimation?: boolean | Animated.SharedValue<boolean>;
  onPress?: () => void;
}

const TouchableOpacity = styled.TouchableOpacity<{ scale: number }>`
  transform: ${({ scale }): string => `scale(${scale}`};
`;

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const AnimatedPath = Animated.createAnimatedComponent(Path);

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  scale: scaleSetting,
  color: colorSetting,
  dimensions: dimensionSettings,
  animationDuration: animationDurationSetting,
  itemOffset: itemOffsetSettings,
  type: typeSetting,
  runAnimation: runAnimationSetting,
  onPress: onPressSetting,
}) => {
  const { animationClock, rotation, animation } = useGetAnimation({
    type: typeSetting ?? DEFAULT_ANIMATION,
    animationDuration: animationDurationSetting,
  });

  const fill = colorSetting ?? COLOR;
  const scale = scaleSetting ?? SCALE;
  const itemOffset = itemOffsetSettings ?? ITEM_OFFSET;
  const dimensions = { width: dimensionSettings ?? WIDTH, height: dimensionSettings ?? HEIGHT };
  const animatedProps = {
    dimensions,
    fill,
    animationClock,
    animationType: typeSetting,
  };

  const animatedPropsLineOne = useGetAnimatedPropsFirstLine({
    ...animatedProps,
    offset: -itemOffset,
  });
  const animatedPropsLineTwo = useGetAnimatedPropsSecondLine({
    ...animatedProps,
    offset: 0,
  });
  const animatedPropsLineThree = useGetAnimatedPropsThirdLine({
    ...animatedProps,
    offset: itemOffset,
  });

  const animationPaths = [animatedPropsLineOne, animatedPropsLineTwo, animatedPropsLineThree];

  const rotationStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const onPressCallback = useCallback(() => {
    if (onPressSetting) {
      onPressSetting();
    }

    animation();
  }, [animation, onPressSetting]);

  useAnimatedReaction(
    () => runAnimationSetting,
    () => {
      if (
        typeof runAnimationSetting === 'boolean' ||
        typeof runAnimationSetting?.value === 'boolean'
      ) {
        animation();
      }
    },
    [runAnimationSetting],
  );

  return (
    <Wrapper>
      <TouchableOpacity
        activeOpacity={onPressSetting ? 0.2 : 1}
        onPress={onPressSetting ? onPressCallback : undefined}
        scale={scale}
      >
        <Animated.View style={rotationStyle}>
          <Svg {...dimensions}>
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
