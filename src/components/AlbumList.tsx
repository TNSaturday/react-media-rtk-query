import { IUser } from "../store/slice/usersSlice";
import { useGetAlbumsQuery, useCreateAlbumMutation } from "../store";
import { Skeleton } from "./index";
import { ExpandablePanel } from "./index";
import { Button } from "./index";
import { IAlbum } from "../store/api/albumsApi";

function AlbumList({ user }: { user: IUser }) {
  const { data, error, isLoading } = useGetAlbumsQuery(user);
  const [createAlbum, results] = useCreateAlbumMutation();

  const handleCreateAlbum = () => {
    createAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album: IAlbum) => (
      <ExpandablePanel header={<div>{album.title}</div>} key={album.id}>
        List of photos
      </ExpandablePanel>
    ));
  }

  return (
    <div>
      <div>
        Albums for {user.name}
        <Button.Primary onClick={handleCreateAlbum}>+ Add Album</Button.Primary>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumList;
