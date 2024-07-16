import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIntro = createAsyncThunk('fetchIntro', async () => {
  const response = await fetch(`${import.meta.env.VITE_INTRO_API}`);
  const data = await response.json();
  console.log(data);
  return data;
});

const introSlice = createSlice({
  name: 'intro',
  initialState: {
    isLoading:false,
    data: null,
    isError:false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIntro.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIntro.fulfilled, (state, action) => {
        state.isLoading = false ;
        state.data = action.payload;
      })
      .addCase(fetchIntro.rejected, (state, action) => {
        console.log(action.payload)
        state.status = 'failed';
        state.isError =true;
      });
  },
});

export default introSlice.reducer;
