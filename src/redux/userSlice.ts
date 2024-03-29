import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../constant/screenUrl";
import { toast } from "react-toastify";

interface IUserState {
  userId: string;
  isLoading: boolean;
}

interface IUser {
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}

const initialState: IUserState = {
  userId: "",
  isLoading: false,
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }: IUser) => {
    try {
      const response = await axios.post(`${BASE_URL}api/v1/auth/login`, {
        userName: email,
        password,
      });

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError.response) {
        throw new Error(axiosError.response.data.message);
      } else {
        throw new Error("Network Error occurred");
      }
    }
  }
);

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userId = action.payload.data.userId;
      state.isLoading = true;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      toast(action.error.message, { type: "error", theme: "colored" });
    });
  },
});

export default userSlice;
