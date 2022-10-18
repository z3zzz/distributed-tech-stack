import { createSlice } from '@reduxjs/toolkit';

export const fieldSlice = createSlice({
  name: 'field',
  initialState: {
    method: 'GET',
    uri: '/self/introduction',
    password: '',
    body: '',
    language: 'python',
    db: 'pg',
    server: 'apache',
  },
  reducers: {
    setMethod: (state, action) => {
      state.method = action.payload;
    },
    setUri: (state, action) => {
      state.uri = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setBody: (state, action) => {
      state.body = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setDb: (state, action) => {
      state.db = action.payload;
    },
    setServer: (state, action) => {
      state.server = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setMethod,
  setUri,
  setPassword,
  setBody,
  setLanguage,
  setDb,
  setServer,
} = fieldSlice.actions;

export default fieldSlice.reducer;
