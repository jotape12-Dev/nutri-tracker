import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

const MaterialCommunityIcons: React.FC<Props> = ({ name, size = 24, color = '#4CAF50' }) => {
  // Path for the specific 'leaf' icon from Material Community Icons
  const paths: { [key: string]: string } = {
    leaf: "M13,2C9,2 6,5 6,9C6,12 8,14.5 10.5,15.5C11.5,16 13,19 13,19C13,19 14.5,16 15.5,15.5C18,14.5 20,12 20,9C20,5 17,2 13,2Z",
  };

  const path = paths[name] || paths.leaf;

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d={path} fill={color} />
    </Svg>
  );
};

export default MaterialCommunityIcons;
