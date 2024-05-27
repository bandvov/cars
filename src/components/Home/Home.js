import React from "react";
import { useAuth } from "../../providers/AuthProvider";

export default function HomePage() {
  const { user, logout } = useAuth();

  return (
    <div>
      Home page
      <span>{user}</span>
    </div>
  );
}
