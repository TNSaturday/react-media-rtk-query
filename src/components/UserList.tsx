import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getUsers } from "../store";
import { addUser } from "../store";
import { Button } from "./index";
import { Skeleton } from "./index";

function UserList() {
  const dispatch = useAppDispatch();
  const { isLoading, users, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    void dispatch(getUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    void dispatch(addUser());
  };

  if (isLoading) return <Skeleton times={5} className="h-10 w-full" />;

  if (error) return <div>Error fetching users</div>;

  const renderedUsers = users.map((user) => {
    return (
      <div className="mb-2 border rounded" key={user.id}>
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleAddUser}>+ Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
}

export default UserList;
