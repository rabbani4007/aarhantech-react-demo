import React, { useEffect, useState } from "react";
import BlogApi from "../../services/blog-api";
import { IBlogCard } from "../blog/types";

const ViewPost = () => {
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
      <>
        <div className="row">
          <div className="col-12 col-lg-8 col-xxl-9 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <h5 className="card-title mb-0">Category List</h5>
              </div>
              <table className="table table-hover my-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th className="d-none d-xl-table-cell">Title</th>
                    <th className="d-none d-xl-table-cell">Created By</th>
                    <th className="d-none d-md-table-cell">Created On</th>
                    <th className="d-none d-md-table-cell"></th>
                    <th className="d-none d-md-table-cell"></th>
                  </tr>
                </thead>
                <tbody>
                  {blogData &&
                    blogData.map((blog, i) => (
                      <tr key={i}>
                        <td>{blog.id}</td>
                        <td className="d-none d-xl-table-cell">{blog.title}</td>
                        <td className="d-none d-xl-table-cell">
                          {blog.createdBy}
                        </td>
                        <td>
                          <span className="d-none d-xl-table-cell">
                            {blog.createdOn}
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-success">Edit</span>
                        </td>
                        <td>
                          <span className="badge bg-danger">Delete</span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default ViewPost;
