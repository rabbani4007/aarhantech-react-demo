import { IBlogCard, IBlogCategory, IBlogTag } from "../components/blog/types";
const BlogCardData: IBlogCard[] = [
  {
    id: 1,
    title: " Microsoft Stories",
    titleImage: "blog-1.jpg",
    createdBy: "Rabbani",
    createdOn: "Jan 11, 2023",
    totalComments: "13 comments",
    content: `Full disclosure: We've totally gushed over Microsoft's "Stories" microsite before. We can't help it — what better way to revitalize an old-school brand than with a blog that boasts beautiful, interactive, and inspiring branded content? Plus, the square layout of these stories is reminiscent of the Microsoft logo, which achieves a valuable brand consistency.
  
        Microsoft Stories is also a prime example of how a business blog can be a major asset for an overall rebrand. In recent years, Microsoft has worked to humanize its brand, largely in response to a rivalry with Apple. The "Stories" microsite has a simple tagline — "Get an inside look at the people, places and ideas that move us." It's the softer side of Microsoft, so to speak.
        
        When you're trying to convey a certain brand message, your blog can be used to communicate it — both aesthetically, and content-wise.`,
  },
  {
    id: 2,
    title: "My Sample Data",
    titleImage: "blog-2.jpg",
    createdBy: "Rabbani",
    createdOn: "Jan 1, 2022",
    totalComments: "1 comments",
    content:
      "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.",
  },
  {
    id: 3,
    title: "Data Science Central",
    titleImage: "blog-3.jpg",
    createdBy: "Rabbani",
    createdOn: "Jan 1, 2022",
    totalComments: "3 comments",
    content: `Data Science Central does exactly what its name suggests and acts as an online resource hub for just about everything related to data science and big data. The site covers a wide array of data science topics regarding analytics, technology, tools, data visualization, code, and job opportunities. Industry experts contribute discussion and insights about key topics.

      The site updates frequently, nearly two blog posts a day from contributing writers, and it also offers a community forum for discussion or questions.`,
  },
];

export default {
  getBlog: (): IBlogCard[] => {
    // return axios.get<any>(
    //   `https://newsapi.org/v2/sources?language=en&apiKey=${api_key}`
    // );
    return BlogCardData;
  },
  getBlogById: (id: number): IBlogCard => {
    var blogData = BlogCardData.filter(function (blog) {
      return blog.id === id;
    });

    return blogData[0];
  },
  getBlogCategory: (): IBlogCategory[] => {
    const blogCategoryList: IBlogCategory[] = [
      {
        id: 1,
        name: "General",
        count: 10,
      },
      {
        id: 2,
        name: "Lifestyle",
        count: 20,
      },
      {
        id: 3,
        name: "Travel",
        count: 1,
      },
      {
        id: 4,
        name: "Creative",
        count: 12,
      },
      {
        id: 5,
        name: "Design",
        count: 1,
      },
    ];
    return blogCategoryList;
  },
  getBlogTag: (): IBlogTag[] => {
    const blogTagList: IBlogTag[] = [
      {
        id: 1,
        name: "App",
      },
      {
        id: 2,
        name: "IT",
      },
      {
        id: 3,
        name: "Business",
      },
      {
        id: 4,
        name: "Mac",
      },
      {
        id: 5,
        name: "Design",
      },
    ];
    return blogTagList;
  },
};
