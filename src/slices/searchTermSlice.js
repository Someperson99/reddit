import { createSlice } from '@reduxjs/toolkit'

const searchInputSlice = createSlice({
  name: "searchTerm",
  initialState: "",
  reducers: {
    updateSearchTerm(state, action){
      state.value = action.payload
    },
    clearSearchTerm(state){
      state.value = ""
    }
  }
})


export const { updateSearchTerm, clearSearchTerm } = searchInputSlice.actions
export default searchInputSlice.reducer;