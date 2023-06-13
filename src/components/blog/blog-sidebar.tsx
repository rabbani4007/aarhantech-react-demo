import React from "react";
import CategoryList from "./category-list";
import BlogTagList from "./blog-tag-list";

const BlogSidebar = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="sidebar">
          <h3 className="sidebar-title">Search</h3>
          <div className="sidebar-item search-form">
            <form action="">
              <input type="text" />
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>

          <CategoryList />

          <h3 className="sidebar-title">Recent Posts</h3>
          <div className="sidebar-item recent-posts">
            <div className="post-item clearfix">
              <img src="assets/img/blog/blog-recent-1.jpg" alt="" />
              <h4>
                <a href="blog-single.html">
                  Nihil blanditiis at in nihil autem
                </a>
              </h4>
              <span>Jan 1, 2020</span>
            </div>

            <div className="post-item clearfix">
              <img src="assets/img/blog/blog-recent-2.jpg" alt="" />
              <h4>
                <a href="blog-single.html">Quidem autem et impedit</a>
              </h4>
              <span>Jan 1, 2020</span>
            </div>

            <div className="post-item clearfix">
              <img src="assets/img/blog/blog-recent-3.jpg" alt="" />
              <h4>
                <a href="blog-single.html">
                  Id quia et et ut maxime similique occaecati ut
                </a>
              </h4>
              <span>Jan 1, 2020</span>
            </div>

            <div className="post-item clearfix">
              <img src="assets/img/blog/blog-recent-4.jpg" alt="" />
              <h4>
                <a href="blog-single.html">
                  Laborum corporis quo dara net para
                </a>
              </h4>
              <span>Jan 1, 2020</span>
            </div>

            <div className="post-item clearfix">
              <img src="assets/img/blog/blog-recent-5.jpg" alt="" />
              <h4>
                <a href="blog-single.html">
                  Et dolores corrupti quae illo quod dolor
                </a>
              </h4>
              <span>Jan 1, 2020</span>
            </div>
          </div>
          <BlogTagList />
        </div>
      </div>
    </>
  );
};
export default BlogSidebar;
