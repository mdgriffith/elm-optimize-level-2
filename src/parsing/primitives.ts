import { ElmVariant } from '../types';

// List variants

const nil: ElmVariant = {
  typeName: 'List',
  name: 'Nil',
  jsName: '_List_Nil',
  index: 0,
  slots: [],
  totalTypeSlotCount: 2,
};

const cons: ElmVariant = {
  typeName: 'List',
  name: 'Cons',
  jsName: '_List_Nil',
  index: 1,
  slots: ['a'],
  totalTypeSlotCount: 2,
};

const listVariants = [nil, cons];

// Maybe variants

const nothing: ElmVariant = {
  typeName: 'Maybe',
  name: 'Nothing',
  jsName: '$elm$core$Maybe$Nothing',
  index: 1,
  slots: [],
  totalTypeSlotCount: 1,
};

const just: ElmVariant = {
  typeName: 'Maybe',
  name: 'Just',
  jsName: '$elm$core$Maybe$Just',
  index: 0,
  slots: ['a'],
  totalTypeSlotCount: 1,
};
const maybe = [nothing, just];

export const primitives = listVariants.concat(maybe);
