import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { usersReducer } from "./slice/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "./api/albumsApi";

const rootReducer = combineReducers({
  users: usersReducer,
  [albumsApi.reducerPath]: albumsApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(albumsApi.middleware);
    },
  });
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

window.store = store;
setupListeners(store.dispatch);

export * from "./thunks/getUsers";
export * from "./thunks/addUsers";
export * from "./thunks/deleteUser";
export { useGetAlbumsQuery, useCreateAlbumMutation } from "./api/albumsApi";

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
