import { Font } from "../../../themes";

export interface LogoProps {
  LogoSize: "h1" | "h2" | "h3" | "h4" | "p1" | "p2" | "p3" | "p4";
}

function Logo({ LogoSize = "h1" }: LogoProps) {
  const CustomTag = `${LogoSize}` as keyof JSX.IntrinsicElements;
  return <CustomTag style={Font[LogoSize]}>나누기</CustomTag>;
}

export default Logo;
