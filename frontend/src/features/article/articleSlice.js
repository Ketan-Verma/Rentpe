import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import articleService from "./articleService"

const initialState = {
  articles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new article
export const createArticle = createAsyncThunk(
  'article/create',
  async (articleData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await articleService.createArticle(articleData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
// Get this articles
export const getArticles = createAsyncThunk(
    'articles/this',
    async (id, thunkAPI) => {
      try {
        return await articleService.getArticles(id)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
// Get All Articles
export const getAllArticles = createAsyncThunk(
  'articles/getAll',
  async (_, thunkAPI) => {
    try {
    //   const token = thunkAPI.getState().auth.user.token
      return await articleService.getAllArticles(_)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
// Get My Articles
export const getMyArticles = createAsyncThunk(
  'articles/getMy',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await articleService.getMyArticles(id,token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user article
export const deleteArticle = createAsyncThunk(
  'articles/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await articleService.deleteArticle(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createArticle.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.articles.push(action.payload)
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getAllArticles.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllArticles.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.articles = action.payload
      })
      .addCase(getAllArticles.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.articles = action.payload
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteArticle.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.articles = state.articles.filter(
          (article) => article._id !== action.payload.id
        )
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = articleSlice.actions
export default articleSlice.reducer
