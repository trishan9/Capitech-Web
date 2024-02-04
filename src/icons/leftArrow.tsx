import type { FC } from "react";
import type { IconProps } from "./icon";

import Icon from "./icon";

const LeftArrow: FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M13.2602 15.5297L9.74023 11.9997L13.2602 8.46973" />
  </Icon>
);

export default LeftArrow;
