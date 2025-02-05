import { TViolation } from "@shared/Violation/model/types";

export type TFile = {
  name: string;
  violations: TViolation[];
};
