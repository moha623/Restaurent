import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk} from '@reduxjs/toolkit'
import foodService from './foodServices'


const initialState = {
  food: [],
  loading: true,
  error: ''
}


export const fetchFood = createAsyncThunk('food/fetchFood',
  async (thunkAPI) => {
    try {
      return await foodService.getFoods()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

const foodSlice = createSlice({
  name: 'food',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchFood.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchFood.fulfilled, (state, action) => {
      state.loading = false
      state.food = action.payload
      state.error = ''
    })
    builder.addCase(fetchFood.rejected, (state, action) => {
      state.loading = false
      state.food = []
      state.error = action.error.message
    })
  }
})

export default foodSlice.reducer



