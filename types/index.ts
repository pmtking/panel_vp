import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type authVaribelsType = {
  username?: String;
  password?: String
}

export type typeLoginComponentType = {
  type?: String
}

export type NavitemType = {
  icon: JSX.Element | any;
  name?: String;
  link?: String | any;
}


export type KeyValueComponentType = {
  name: String;
  value: String
}

