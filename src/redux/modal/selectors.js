// export const selectIsOpen = (state) => state.modal.isOpen;
import { createSelector } from '@reduxjs/toolkit';

const modalSelector = (state) => state.modal;

const isOpenSelector = createSelector([modalSelector], (modal) => modal.isOpen);

export const modalIsOpenSelector = createSelector(
  [isOpenSelector, (state, id) => id],
  (isOpen, id) => isOpen[id],
);
