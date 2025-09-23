import React from "react";
import Svg, { Path } from "react-native-svg";

interface GuideIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const GuideIcon: React.FC<GuideIconProps> = ({
  width = 28,
  height = 28,
  color = "white",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        d="M5.83337 22.1667V4.66667C5.83337 4.35725 5.95629 4.0605 6.17508 3.84171C6.39388 3.62292 6.69062 3.5 7.00004 3.5H21C21.3095 3.5 21.6062 3.62292 21.825 3.84171C22.0438 4.0605 22.1667 4.35725 22.1667 4.66667V19.8333H8.16671C7.54787 19.8333 6.95438 20.0792 6.51679 20.5168C6.07921 20.9543 5.83337 21.5478 5.83337 22.1667ZM5.83337 22.1667C5.83337 22.7855 6.07921 23.379 6.51679 23.8166C6.95438 24.2542 7.54787 24.5 8.16671 24.5H22.1667M10.5 3.5V19.8333M18.6667 19.8333V24.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default GuideIcon;
