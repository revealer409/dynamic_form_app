import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import FormData from '../../models/FormDataModel';
 
interface FormState {
  data: FormData;
 
}

const initialState: FormState = {
  data: {} as FormData,
 
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submit: (state, action: PayloadAction<FormData>) => {
     // console.log(action.payload.firstName)
      state.data = action.payload;    
    }   
  },
});

export const { submit } = formSlice.actions;

export default formSlice.reducer;