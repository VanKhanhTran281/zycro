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
// import axios from 'axios';

// const BASE_URL = 'http://localhost:3000';

// const fetchData = async <T>(path: string): Promise<T> => {
//   const response = await axios.get<T>(`${BASE_URL}${path}`);
//   return response.data;
// };

// const patchData = async <T>(path: string, data: Partial<T>): Promise<T> => {
//   const response = await axios.patch<T>(`${BASE_URL}${path}`, data);
//   return response.data;
// };

// const createData = async <T>(path: string, data: T): Promise<T> => {
//   const response = await axios.post<T>(`${BASE_URL}${path}`, data);
//   return response.data;
// };

// const deleteData = async (path: string): Promise<void> => {
//   await axios.delete(`${BASE_URL}${path}`);
// };

// export const fetchUserData = async (): Promise<UserData> => {
//   return fetchData<UserData>('/users');
// };

// export const patchUserData = async (userData: Partial<UserAddData>): Promise<UserAddData> => {
//   const { id, ...updatedFields } = userData;
//   return patchData<UserAddData>(`/users/${id}`, updatedFields);
// };

// export const createUserData = async (userData: UserData): Promise<UserData> => {
//   return createData<UserData>('/users', userData);
// };

// export const deleteUserData = async (id: number): Promise<void> => {
//   return deleteData(`/users/${id}`);
// };