import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getUsers } from "../store";
import { addUser } from "../store";
import { Button } from "./index";
import { Skeleton } from "./index";
import UserItem from "./UserItem";

function UserList() {
  const dispatch = useAppDispatch();
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [loadingUsersError, setIsLoadingUsersError] = useState<object | null>(
    null
  );
  const [creatingUserError, setIsCreatingUserError] = useState<object | null>(
    null
  );
  const { users } = useAppSelector((state) => state.users);

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(getUsers())
      .unwrap()
      .catch((err: object) => {
        setIsLoadingUsersError(err);
      })
      .finally(() => {
        setIsLoadingUsers(false);
      });
  }, [dispatch]);

  const handleAddUser = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch(() => {
        (err: object) => {
          setIsCreatingUserError(err);
        };
      })
      .finally(() => {
        setIsCreatingUser(false);
      });
  };

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={5} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching users</div>;
  } else {
    content = users.map((user) => {
      return <UserItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button.Primary loading={isCreatingUser} onClick={handleAddUser}>
          + Add User
        </Button.Primary>
        {creatingUserError && "Error creating user"}
      </div>
      {content}
    </div>
  );
}

export default UserList;
