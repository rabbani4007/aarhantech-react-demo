import React, { useState, useEffect } from "react";
import BlogCard from "./blog-card";
import BlogSidebar from "./blog-sidebar";
import { IBlogCard } from "./types";

import BlogApi from "../../services/blog-api";

const BlogPage = () => {
  const [blogData, setBlogData] = useState<IBlogCard[]>(Array<IBlogCard>());

  async function getBlog() {
    const result = await BlogApi.getBlog();
    setBlogData(result);
  }
  useEffect(() => {
    getBlog();
  }, []);
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Blog</li>
          </ol>
          <h2>Blog</h2>
        </div>
      </section>

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              {blogData.map((b, i) => (
                <BlogCard key={i} blog={b} />
              ))}

              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                </ul>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogPage;
