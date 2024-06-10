import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectFilterName = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [ selectContacts, selectFilterName],
   (contacts, filter) => {
     return contacts.filter(contact => contact.name.toLowerCase()
      .includes(filter.toLowerCase()))
   }
  )