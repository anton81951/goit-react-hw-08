import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectFilterName = (state) => state.filters.name;
export const selectFilterNumber = (state) => state.filters.number;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName, selectFilterNumber],
  (contacts, filterName, filterNumber) => {
    return contacts.filter(contact => {
      const nameMatch = contact.name.toLowerCase().includes(filterName.toLowerCase());
      const numberMatch = contact.number.toLowerCase().includes(filterNumber.toLowerCase());
      return nameMatch && numberMatch;
    });
  }
);