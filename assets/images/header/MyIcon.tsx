import React from "react";
import Svg, { Path } from "react-native-svg";

interface MyIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const MyIcon: React.FC<MyIconProps> = ({
  width = 28,
  height = 28,
  color = "white",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        d="M14 15.1667C17.2216 15.1667 19.8333 12.555 19.8333 9.33333C19.8333 6.11167 17.2216 3.5 14 3.5C10.7783 3.5 8.16663 6.11167 8.16663 9.33333C8.16663 12.555 10.7783 15.1667 14 15.1667Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.3333 24.5C23.3333 22.0246 22.35 19.6507 20.5996 17.9003C18.8493 16.15 16.4753 15.1667 14 15.1667C11.5246 15.1667 9.15064 16.15 7.4003 17.9003C5.64996 19.6507 4.66663 22.0246 4.66663 24.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MyIcon;

