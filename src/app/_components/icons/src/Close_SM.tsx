import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path d="M10.6663 10.6667L7.99968 8.00002M7.99968 8.00002L5.33301 5.33334M7.99968 8.00002L10.6664 5.33334M7.99968 8.00002L5.33301 10.6667"/>
    </BaseIcon>
  );
}