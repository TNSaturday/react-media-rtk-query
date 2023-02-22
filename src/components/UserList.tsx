import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getUsers } from "../store";

function UserList() {
  const dispatch = useAppDispatch();
  const { isLoading, users, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    void dispatch(getUsers());
  }, [dispatch]);
  return <div>User List</div>;
}

export default UserList;
