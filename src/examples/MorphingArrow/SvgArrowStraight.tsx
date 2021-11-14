import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  height: number;
  width: number;
  fill: string;
}

const straightArrow = {
  svg: (
    <Path d="M392.533 187.733H17.067C7.641 187.733 0 195.374 0 204.8s7.641 17.067 17.067 17.067h375.467c9.426 0 17.067-7.641 17.067-17.067s-7.642-17.067-17.068-17.067z" />
  ),
  viewBox: '0 0 409.6 409.6',
};

const SvgStraightArrow: React.FC<Props> = ({ height, width, fill }) => (
  <Svg height={height} width={width} viewBox={straightArrow.viewBox} fill={fill}>
    {straightArrow.svg}
  </Svg>
);

export default SvgStraightArrow;
