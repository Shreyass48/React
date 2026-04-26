import { Profile, Sidebar } from "./Common";

export default function Dashboard() {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <Profile />
    </div>
  );
}
