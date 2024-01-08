import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path d="M34.6666 36C34.6666 32.3181 29.891 29.3333 23.9999 29.3333C18.1089 29.3333 13.3333 32.3181 13.3333 36M23.9999 25.3333C20.318 25.3333 17.3333 22.3486 17.3333 18.6667C17.3333 14.9848 20.318 12 23.9999 12C27.6818 12 30.6666 14.9848 30.6666 18.6667C30.6666 22.3486 27.6818 25.3333 23.9999 25.3333Z"/>
    </BaseIcon>
  );
}