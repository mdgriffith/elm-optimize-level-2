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
