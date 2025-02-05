import { TRule } from "@shared/Rules/model/types";

export type TViolation = {
  ruleId: TRule['id'];
  line: number;
  column: number;
  message: string;
}