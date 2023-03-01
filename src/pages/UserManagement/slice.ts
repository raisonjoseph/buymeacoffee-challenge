import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "../../api/users";
import { AppThunk, RootState } from "../../app/store";
import { Meta, User, UserState } from "./models";

const initialState: UserState = {
  data: [],
  isLoading: false,
  hasError: false,
  page: 1,
  maxPage: 1,
  pageSize: 10,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsers: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    fetchUsersSuccess: (
      state,
      action: PayloadAction<{
        users: User[];
        meta: Meta;
      }>
    ) => {
      const { users, meta } = action.payload;
      if (meta.page === 1) state.data = users;
      else state.data = [...state.data, ...users];
      state.page = meta.page;
      state.maxPage = meta.maxPage;
      state.pageSize = meta.pageSize;
      state.isLoading = false;
      state.hasError = false;
    },
    fetchUsersError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.hasError = true;
    },
    addToUsers: (state, action: PayloadAction<User>) => {
      state.data = [action.payload, ...state.data];
    },
    removeUsers: (state, action: PayloadAction<number>) => {
      const userIdToDelete = action.payload;
      state.data = state.data.filter((user) => user.id !== userIdToDelete);
    },
    resetUsers: () => initialState,
  },
});

export const {
  fetchUsers,
  fetchUsersError,
  fetchUsersSuccess,
  addToUsers,
  removeUsers,
  resetUsers,
} = userSlice.actions;

export const getUsersList =
  (page: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(fetchUsers());
      const response = await getUsers({ page });

      // Fot v2 apis the paginations are in header
      const currentPage = Number(response.headers["x-pagination-page"]);
      const maxPage = Number(response.headers["x-pagination-pages"]);
      const pageSize = Number(response.headers["x-pagination-total"]);

      if (response.data)
        dispatch(
          fetchUsersSuccess({
            users: response.data,
            meta: {
              page: currentPage,
              maxPage,
              pageSize,
            },
          })
        );
    } catch (error) {
      dispatch(
        fetchUsersError("Something went wrong while fetching skilling courses")
      );
    }
  };

export const selectUsers = (state: RootState) => state.users;

export default userSlice.reducer;
