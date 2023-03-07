import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../slice/usersSlice";
import pause from "../../utils/pause";

const deleteUser = createAsyncThunk("users/delete", async (user: IUser) => {
  await axios.delete<IUser>(`http://localhost:5174/users/${user.id}`);

  // TODO: remove when testing finished
  await pause(500);

  return user;
});

export { deleteUser };
