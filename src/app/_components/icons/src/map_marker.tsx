import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <rect width="40" height="40" rx="20"/><circle cx="20" cy="20" r="10"/>
    </BaseIcon>
  );
}