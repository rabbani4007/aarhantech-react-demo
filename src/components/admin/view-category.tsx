import React, { useEffect, useState } from "react";
import BlogApi from "../../services/blog-api";
import { IBlogCategory } from "../blog/types";

const ViewCategory = () => {
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
                  <th className="d-none d-xl-table-cell">Name</th>
                  <th className="d-none d-xl-table-cell">Count</th>
                  <th className="d-none d-md-table-cell"></th>
                  <th className="d-none d-md-table-cell"></th>
                </tr>
              </thead>
              <tbody>
                {blogCategory &&
                  blogCategory.map((category, i) => (
                    <tr key={i}>
                      <td>{category.id}</td>
                      <td className="d-none d-xl-table-cell">
                        {category.name}
                      </td>
                      <td className="d-none d-xl-table-cell">
                        {category.count}
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
  );
};
export default ViewCategory;
