import { Divider } from "@mantine/core";
import AwaitingCollectionTable from "./components/AwaitingCollectionTable/AwaitingCollectionTable";

export default function AwaitingCollection() {
  return (
    <div>
      <Divider h={75} />
      <AwaitingCollectionTable />
    </div>
  );
}
