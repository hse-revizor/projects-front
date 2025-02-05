import { TFile } from "@shared/Projects/File/model/types";

export type TReport = {
  id: string;
  timestamp: string;
  files: TFile[];
}