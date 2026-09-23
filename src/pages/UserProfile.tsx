import React from "react";
import { useParams } from "react-router";
import users from "../data/users";

const UserProfile = () => {
  const { id } = useParams();

  const user = id ? users[id] : undefined;
  return (
    <div className="text-white">
      {user ? (
        <div>
          <p>名前: {user.name}</p>
          <p>メールアドレス: {user.email}</p>
        </div>
      ) : (
        <p>User Not Found</p>
      )}
    </div>
  );
};

export default UserProfile;
