import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface LeafIconProps {
  size?: number;
  color?: string;
}

const LeafIcon: React.FC<LeafIconProps> = ({ size = 26, color = '#40C77D' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {/* 
        Solid Leaf Shape 
        A smooth, elliptical leaf tilted 45 degrees.
      */}
      <Path
        d="M21 2C21 2 15 2 10 7C5 12 5 18 5 18C5 18 11 18 16 13C21 8 21 2 21 2Z"
        fill={color}
      />
      {/* 
        Central Vein (White Line) 
      */}
      <Path
        d="M19 4L7 16"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default LeafIcon;
