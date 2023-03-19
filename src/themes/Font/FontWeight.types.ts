import type { CSSProperties } from "react";

export type FontWeightKey =
  | "extrabold"
  | "semibold"
  | "bold"
  | "medium"
  | "regular";

export type FontWeightTypes = Record<FontWeightKey, CSSProperties>;
