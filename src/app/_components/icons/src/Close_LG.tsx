import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"/>
    </BaseIcon>
  );
}