import axios from 'axios';

export const fetchContactData = async (): Promise<ContactsData> => {
  const response = await axios.get<ContactsData>('http://localhost:3000/use_example');
  return response.data;
};
export const patchContactData = async (userData: Partial<ContactsData>): Promise<ContactsData> => {
  const { id, ...updatedFields } = userData;
  const response = await axios.patch<ContactsData>(`http://localhost:3000/use_example/${id}`, updatedFields);
  return response.data;
};
export const createContactData = async (userData: ContactsAddData): Promise<ContactsData> => {
  const response = await axios.post<ContactsData>('http://localhost:3000/use_example', userData);
  return response.data;
};
export const deleteContactData = async (id: number): Promise<void> => {
  await axios.delete(`http://localhost:3000/use_example/${id}`);
};
export const uploadFile = async (file: File): Promise<void> => {
  const formData = new FormData();
  formData.append('file', file);

  await axios.post('http://localhost:3000/file', formData);
};