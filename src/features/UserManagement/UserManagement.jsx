import React from "react";
import Sidebar from "../../components/Sidebar";
const users = [
  {
    name: "Gladys Jones",
    email: "gladys@example.com",
    role: "Admin",
    active: true,
    imageUrl: "path/to/gladys-image",
  },
  {
    name: "Jennie Cooper",
    email: "jennie@example.com",
    role: "Candidate",
    active: true,
    imageUrl: "path/to/jennie-image",
  },
  {
    name: "Philip Steward",
    email: "philip@example.com",
    role: "Candidate",
    active: true,
    imageUrl: "path/to/philip-image",
  },
  {
    name: "Jorge Black",
    email: "jorge@example.com",
    role: "User",
    active: false,
    imageUrl: "path/to/jorge-image",
  },
  {
    name: "Evan Flores",
    email: "evan@example.com",
    role: "User",
    active: false,
    imageUrl: "path/to/evan-image",
  },
];

const UserManagement = () => {
  return <Sidebar />;
};

export default UserManagement;
