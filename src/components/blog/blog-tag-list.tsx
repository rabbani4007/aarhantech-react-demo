import React, { useState, useEffect } from "react";
import BlogApi from "../../services/blog-api";
import { IBlogTag } from "./types";
const BlogTagList = () => {
  const [loading, setLoading] = useState(false);
  const [blogTag, setBlogTag] = useState<IBlogTag[]>(Array<IBlogTag>());

  async function getBlogTag() {
    const result = await BlogApi.getBlogTag();
    setBlogTag(result);
  }
  useEffect(() => {
    getBlogTag();
  }, []);
  return (
    <>
      <h3 className="sidebar-title">Tags</h3>
      <div className="sidebar-item tags">
        <ul>
          {blogTag &&
            blogTag.map((tag, i) => (
              <li key={i}>
                <a href="#">{tag.name}</a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
export default BlogTagList;
