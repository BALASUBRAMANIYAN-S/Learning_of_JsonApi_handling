import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserApiIdQuery } from "../services/userApi";

function UserCard() {
  const { id } = useParams();
  const { data: User } = useGetUserApiIdQuery(id);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
  <div className="flex flex-col items-center justify-center text-black">
    
    {/* Profile Image */}
    <img
      src="/image.png"
      className="w-28 h-28 rounded-full object-cover mb-4"
      alt="User Profile"
    />


    <div className="grid grid-cols-2 gap-x-10 gap-y-3 w-full text-sm mt-2">
      <p className="font-semibold ml-20">Name:</p>
      <p>{User?.name}</p>

      <p className="font-semibold ml-20">Username:</p>
      <p>{User?.username}</p>

      <p className="font-semibold ml-20">Email:</p>
      <p>{User?.email}</p>

      <p className="font-semibold ml-20">Street:</p>
      <p>{User?.address?.street}</p>

      <p className="font-semibold ml-20">City:</p>
      <p>{User?.address?.city}</p>

      <p className="font-semibold ml-20">Zipcode:</p>
      <p>{User?.address?.zipcode}</p>

      <p className="font-semibold ml-20">Phone:</p>
      <p>{User?.phone}</p>

      <p className="font-semibold ml-20">Website:</p>
      <a href={User?.website} target="_blank" rel="noopener noreferrer">
  Visit Website
</a>

    </div>
  </div>
</div>

  );
}

export default UserCard;
