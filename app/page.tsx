"use client";
import { UserProvider, useUserContext } from "./userContext";

const Inner = () => {
  const userData = useUserContext();

  return (
    <div className="flex mx-auto p-6 justify-center">
      <h1 className="text-blue-500">User Profile</h1>
      {userData ? (
        <>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </>
      ) : (
        <div className="">
          <p>Loading user data...</p>
        </div>
      )}
    </div>
  );
};

// ในระดับที่สูงกว่า (ที่ครอบ Inner หรือสร้าง Layout) ให้ใส่ UserProvider เพื่อให้ Context สามารถทำงานได้ในหน้านี้และหน้าย่อย
function Layout() {
  return (
    <UserProvider>
      <Inner />
    </UserProvider>
  );
}

export default Layout;
