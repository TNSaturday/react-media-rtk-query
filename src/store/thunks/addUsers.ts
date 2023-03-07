import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { IUser } from "../slice/usersSlice";
import pause from "../../utils/pause";

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post<IUser>("http://localhost:5174/users", {
    name: faker.name.fullName(),
  });

  // TODO: remove when testing finished
  await pause(500);

  return response.data;
});

export { addUser };
