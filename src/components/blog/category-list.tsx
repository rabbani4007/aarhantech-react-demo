import React, { useEffect, useState } from "react";
import BlogApi from "../../services/blog-api";
import { IBlogCategory } from "./types";

const CategoryList = () => {
  const [loading, setLoading] = useState(false);
  const [blogCategory, setBlogCategory] = useState<IBlogCategory[]>(
    Array<IBlogCategory>()
  );

  async function getBlogCategory() {
    const result = await BlogApi.getBlogCategory();
    setBlogCategory(result);
  }
  useEffect(() => {
    getBlogCategory();
  }, []);
  return (
    <>
      <h3 className="sidebar-title">Categories</h3>
      <div className="sidebar-item categories">
        <ul>
          {blogCategory &&
            blogCategory.map((category, i) => (
              <li key={i}>
                <a href="#">
                  {category.name} <span>({category.count})</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
export default CategoryList;
