import ClientSide from "./components/ClientSide";
import ServerSide from "./components/ServerSide";

export default function Home() {
  console.log("server-side");
  return (
    <div>
      <ServerSide />
      <ClientSide />
    </div>
  );
}
