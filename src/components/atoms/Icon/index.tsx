export interface IconProps {
  width: string;
  height: string;
  fill: string;
  path: string;
}

function Icon(IconProps: IconProps) {
  return (
    <svg
      width={IconProps.width}
      height={IconProps.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={IconProps.path} fill={IconProps.fill} />
    </svg>
  );
}

export default Icon;
