import React from "react";
import { NavLink } from "react-router-dom";

import { IBlogCardProps } from "./types";

const BlogCard: React.FC<IBlogCardProps> = (props) => {
  const {
    id,
    title,
    titleImage,
    createdBy,
    createdOn,
    totalComments,
    content,
  } = props.blog;
  return (
    <>
      <article className="entry">
        <div className="entry-img">
          <img
            src={`/assets/img/blog/${titleImage}`}
            alt=""
            className="img-fluid"
          />
        </div>

        <h2 className="entry-title">
          <NavLink to={`/blog-details/${id}`}>{title}</NavLink>
        </h2>

        <div className="entry-meta">
          <ul>
            <li className="d-flex align-items-center">
              <i className="bi bi-person"></i>

              <NavLink to={`/blog-details/${id}`}>{createdBy}</NavLink>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-clock"></i>
              <a href={`/blog-details/${id}`}>
                <span>{createdOn}</span>
              </a>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-chat-dots"></i>
              <NavLink to={`/blog-details/${id}`}>{totalComments}</NavLink>
            </li>
          </ul>
        </div>

        <div className="entry-content">
          <p>{content}</p>
          <div className="read-more">
            <NavLink to={`blog-details/${id}`}>Read More</NavLink>
          </div>
        </div>
      </article>
    </>
  );
};
export default BlogCard;
