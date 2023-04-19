import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export const MenuIcon = (props: any) => {
  return (
    <Svg
      height={42}
      viewBox="0 0 32 32"
      width={32}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.412 16.293h12M6.412 12.11h8.206M6.412 7.927h4.425"
        transform="matrix(1.33333 0 0 -1.33333 0 32)"
        fill="#333"
        stroke="#333"
        strokeWidth={0.77399999}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
    </Svg>
  );
};

export const RupeeIcon = (props: any) => {
  return (
    <Svg
      height="20px"
      viewBox="0 0 64 64"
      width="64px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G fill="none" stroke="#000000" strokeMiterlimit={10} strokeWidth={2}>
        <Path d="M52 62.999L52 0.999 26 0.999 12 14.999 12 63 16 61 20 63 24 61 28 63 32 61 36 63 40 61 44 63 48 61z" />
        <Path d="M12 14.999L26 14.999 26 0.999" />
      </G>
      <Path
        d="M35.062 49.938L22 38v-1h6s10 .75 10-8c0-7.875-10-8-10-8h-7"
        fill="none"
        stroke="#000000"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <Path
        fill="none"
        stroke="#000000"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M21 21L43 21"
      />
      <Path
        fill="none"
        stroke="#000000"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M21 26L43 26"
      />
    </Svg>
  );
};


