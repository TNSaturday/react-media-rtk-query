import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getUsers } from "../store";

function UserList() {
  const dispatch = useAppDispatch();
  const { isLoading, users, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    void dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error fetching users</div>;

  return <div>{users[0]?.name}</div>;
}

export default UserList;
