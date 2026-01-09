import React from "react";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import Articles from "./Articles";

const Sidebar = ({ posts, setTitleFilter, setUserFilter, titleFilter, userFilter, users }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">
          Lastest-Posts
          <MdOutlineAccessTime />
        </h1>
        <div className="search-bar">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setTitleFilter(e.target.value)}
              value={titleFilter}
            />
            <IoIosSearch className="search-icon" />
          </div>

          <div className="select-wrapper">
            <select
              className="user-filter"
              name="userFilter"
              id="userFilter"
              value={userFilter}
              onChange={(e) => setUserFilter(e.target.value)}
            >
              <option value="" disabled>
                User
              </option>
              {users.map((user, idx) => {
                return (
                  <option key={idx} value={user.id}>
                    {user.id}
                  </option>
                );
              })}
            </select>

            <CiFilter className="filter-icon" />
          </div>
        </div>
      </div>
      <div className="article-container">
        <Articles posts={posts} />
      </div>
    </div>
  );
};

export default Sidebar;
