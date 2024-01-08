import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIcon) {
  return (
    <BaseIcon {...props}>
      <path d="M26.6668 28C26.6668 24.3181 21.8912 21.3333 16.0002 21.3333C10.1091 21.3333 5.3335 24.3181 5.3335 28M16.0002 17.3333C12.3183 17.3333 9.3335 14.3486 9.3335 10.6667C9.3335 6.98477 12.3183 4 16.0002 4C19.6821 4 22.6668 6.98477 22.6668 10.6667C22.6668 14.3486 19.6821 17.3333 16.0002 17.3333Z"/>
    </BaseIcon>
  );
}