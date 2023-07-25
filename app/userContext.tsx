// userContext.tsx
import React, { createContext, useState, useContext } from "react";

// สร้าง interface สำหรับข้อมูลที่ต้องการใช้ใน UserContext
interface UserData {
  username: string;
  email: string;
  // เพิ่ม properties อื่น ๆ ตามที่คุณต้องการ
}
[];

// สร้าง Context และให้ค่าเริ่มต้นเป็น null
export const UserContext = createContext<UserData | null>(null);

// สร้าง Custom Hook สำหรับการใช้ Context
export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    //throw new Error("useUserContext must be used within a UserProvider");
    return null;
  }
  return context;
}

// สร้าง Component ที่จะใช้เป็น Provider ของ Context
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<UserData | null>(null);
  setTimeout(() => {
    setUserData({
      email: "peerawat@gmail.com",
      username: "peerawat",
    });
  }, 2000);
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
