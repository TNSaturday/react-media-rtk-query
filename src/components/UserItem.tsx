import { IUser } from "../store/slice/usersSlice";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button/Button";
import { ExpandablePanel } from "./index";
import { deleteUser } from "../store";
import { useState } from "react";
import { useAppDispatch } from "../hooks";

function UserItem({ user }: { user: IUser }) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<object | null>(null);

  const handleDelete = () => {
    setIsLoading(true);
    dispatch(deleteUser(user))
      .catch((err: object) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleDelete}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user</div>}
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}>CONTENT</ExpandablePanel>;
}

export default UserItem;
