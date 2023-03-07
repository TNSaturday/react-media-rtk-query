import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../slice/usersSlice";
import { faker } from "@faker-js/faker";

export interface IAlbum {
  id: number;
  userId: number;
  title: string;
}

const albumsApi = createApi({
  reducerPath: "albums",
  endpoints(builder) {
    return {
      getAlbums: builder.query({
        query: (user: IUser) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
      createAlbum: builder.mutation({
        query: (user: IUser) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
    };
  },
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5174",
  }),
});

export const { useGetAlbumsQuery, useCreateAlbumMutation } = albumsApi;
export { albumsApi };
