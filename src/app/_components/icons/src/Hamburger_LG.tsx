import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path d="M4 22.6667H28M4 16H28M4 9.33334H28"/>
    </BaseIcon>
  );
}