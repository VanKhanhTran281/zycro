import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchContact } from './actions';
import { Draft,produce} from 'immer';

interface ContactState {
  data: ContactsData | null;
  loading: boolean;
  error: string | null;
  file:string[]|number;
}

const initialState: ContactState = {
  data: null,
  loading: false,
  error: null,
  file:[]
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateContact: (state, action: PayloadAction<ContactsData>) => {
      const updatedContactData = action.payload;
      
      if (Array.isArray(state.data)) {
        const existingContact = state.data.find(user => user.id === updatedContactData.id);
        if (existingContact) {
          Object.assign(existingContact, updatedContactData);
        }
      }
    },
    createContact: (state, action: PayloadAction<ContactsData>) => {
      const newContactData = action.payload;
      
      if (state.data) {
        const dataArray = state.data as unknown as ContactsData[];
        dataArray.push(newContactData);
      }
    },
    deleteContact: (state: Draft<ContactState>, action: PayloadAction<number>) => {
      const id = action.payload;
      state.data = produce(state.data, (draft: Draft<ContactsData>[]) => {
        if (Array.isArray(draft)) {
          draft = draft.filter(user => user.id !== id);
        }
      });
    },
    addFile: (state, action: PayloadAction<string>) => {
      if (Array.isArray(state.file)) { // Kiểm tra nếu state.file là một mảng
        state.file.push(action.payload); // Đẩy tên file vào mảng
      } else {
        state.file = [action.payload]; // Nếu state.file không phải là mảng, khởi tạo state.file là một mảng chứa tên file
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContact.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    
    builder.addCase(fetchContact.fulfilled, (state, action: PayloadAction<ContactsData>) => {
      state.loading = false;
      state.data = action.payload;
    });
    
    builder.addCase(fetchContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch user data.';
    });
  },
});


export const { updateContact,createContact,deleteContact,addFile} = userSlice.actions;
export default userSlice.reducer;