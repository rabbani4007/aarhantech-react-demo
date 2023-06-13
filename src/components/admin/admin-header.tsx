import React from "react";
import { NavLink } from "react-router-dom";
const AdminHeader = () => {
  return (
    <>
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Admin Panel</h3>
        </div>

        <ul className="list-unstyled components">
          <p>Dummy Heading</p>

          <li className="active">
            <a className="dropdown-toggle">Home</a>
            <ul className="">
              <li>
                <NavLink to="/admin/view-post">View Post</NavLink>
              </li>
              <li>
                <NavLink to="/admin/create-post">Create Post</NavLink>
              </li>
              <li>
                <NavLink to="/admin/view-category">View Category</NavLink>
              </li>
              <li>
                <NavLink to="/admin/create-category">Create Category</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default AdminHeader;
