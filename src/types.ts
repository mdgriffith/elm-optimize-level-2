export enum Mode {
  Prod = 'prod',
  Dev = 'dev',
}

export interface ElmVariant {
  typeName: string;
  name: string;
  jsName: string;
  index: number;
  slots: string[];
  totalTypeSlotCount: number;
}

export type Transforms = {
  prepack: boolean;
  variantShapes: boolean;
  inlineEquality: boolean;
  inlineFunctions: boolean;
  listLiterals: boolean;
  arrowFns: boolean;
  objectUpdate: ObjectUpdate | null;
  unusedValues: boolean;
};

export enum ObjectUpdate {
  UseSpreadForUpdateAndOriginalRecord = 'for_both',
  UseSpreadOnlyToMakeACopy = 'for_copy',
  UseAssign = 'use_assign',
  InlineAssign = 'inline_assign',
  InlineSpread = 'inline_spread',
}
