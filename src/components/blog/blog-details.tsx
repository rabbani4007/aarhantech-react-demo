import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import BlogSidebar from "./blog-sidebar";

import { IBlogCard } from "./types";
import BlogApi from "../../services/blog-api";

type TParams = { id: string };

const BlogDetails = ({ match }: RouteComponentProps<TParams>) => {
  const [blogData, setBlogData] = useState<IBlogCard>();
  const [loading, setLoading] = useState(false);

  async function getBlogById() {
    const id = Number(match.params.id);
    const result = await BlogApi.getBlogById(id);
    setBlogData(result);
  }
  useEffect(() => {
    getBlogById();
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
          <h2>Blog-details</h2>
        </div>
      </section>

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              {blogData && (
                <article className="entry entry-single">
                  <div className="entry-img">
                    <img
                      src={`/assets/img/blog/${blogData.titleImage}`}
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <h2 className="entry-title">
                    <a href="blog-single.html">{blogData.title}</a>
                  </h2>

                  <div className="entry-meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person"></i>
                        <a href="blog-single.html">{blogData.createdBy}</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>
                        <a href="blog-single.html">
                          <span>{blogData.createdOn}</span>
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-chat-dots"></i>
                        <a href="blog-single.html">{blogData.totalComments}</a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>{blogData.content}</p>
                  </div>

                  <div className="entry-footer">
                    <i className="bi bi-folder"></i>
                    <ul className="cats">
                      <li>
                        <a href="#">Business</a>
                      </li>
                    </ul>

                    <i className="bi bi-tags"></i>
                    <ul className="tags">
                      <li>
                        <a href="#">Creative</a>
                      </li>
                      <li>
                        <a href="#">Tips</a>
                      </li>
                      <li>
                        <a href="#">Marketing</a>
                      </li>
                    </ul>
                  </div>
                </article>
              )}
              <div className="blog-author d-flex align-items-center">
                <img
                  src="assets/img/blog/blog-author.jpg"
                  className="rounded-circle float-left"
                  alt=""
                />
                <div>
                  <h4>Jane Smith</h4>
                  <div className="social-links">
                    <a href="https://twitters.com/#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://facebook.com/#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://instagram.com/#">
                      <i className="biu bi-instagram"></i>
                    </a>
                  </div>
                  <p>
                    Itaque quidem optio quia voluptatibus dolorem dolor. Modi
                    eum sed possimus accusantium. Quas repellat voluptatem
                    officia numquam sint aspernatur voluptas. Esse et
                    accusantium ut unde voluptas.
                  </p>
                </div>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogDetails;
