import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12.5H19M19 12.5L13 6.5M19 12.5L13 18.5"/>
    </BaseIcon>
  );
}