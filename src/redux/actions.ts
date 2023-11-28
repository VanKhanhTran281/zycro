import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactData, patchContactData, createContactData, deleteContactData,uploadFile } from './api';
import { addFile } from './reducers';


export const fetchContact = createAsyncThunk<ContactsData, void>('user/fetchContact', async () => {
  const userData = await fetchContactData();
  return userData;
});
export const updateContact = createAsyncThunk<ContactsData, Partial<ContactsData>>(
  'user/updateContact',
  async (userData) => {
    const updatedContactData = await patchContactData(userData);
    return updatedContactData;
  }
);
export const createUser = createAsyncThunk<ContactsData, ContactsAddData>(
  'user/createContact',
  async (userData) => {
    const createdContactData = await createContactData(userData);
    return createdContactData;
  }
);
export const deleteContact = createAsyncThunk(
  'user/deleteContact',
  async (id: number) => {
    const deleteContact = await deleteContactData(id);
    return deleteContact;
  });

  export const uploadFileAsync = createAsyncThunk<void, File>(
    'user/uploadFile',
    async (file, { dispatch }) => {
      await uploadFile(file);
      dispatch(addFile(file.name));
    }
  );