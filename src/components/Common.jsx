import { useContext } from "react";
import { useUserContext } from "../utils/context";

export function Sidebar() {
  // fetch user data from context
  const user = useUserContext();
  return (
    <div className="w-64 h-screen bg-slate-800 text-white p-6 shadow-lg">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-slate-400">User Account</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-slate-700 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-300">
              Subscription
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                user.isSubscribed
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {user.isSubscribed ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Profile() {
  const user = useUserContext();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
      <p className="text-gray-600 mb-6">
        This is your profile page. Here you can see your subscription status and
        manage your account settings.
      </p>
    </div>
  );
}
