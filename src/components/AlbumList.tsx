import { IUser } from "../store/slice/usersSlice";

function AlbumList({ user }: { user: IUser }) {
  return <div>Albums for {user.name}</div>;
}

export default AlbumList;
