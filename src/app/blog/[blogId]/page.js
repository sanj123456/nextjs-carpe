import React from "react";
import "./blog.scss";

import BlogCard from "@/Components/BlogCard";

import { BASE_URL } from "@/util/constant";
import axios from "axios";
import { formatDate } from "@/util/helper";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Cards from "@/Components/Cards";
export async function generateMetadata({ params }) {
  const blog = await getBlog(params.blogId);
  // console.log(blog)

return {
  title: blog?.metaTitle || "Used car loan | Second hand car loan | Top-up Loan in ahmedabad",
  description: blog?.metaDescription ||"Carpecash offers used car loan, second hand car loan and top-up loan in Ahmedabad. You can check your eligibility and apply online through our simple process.",
}
}

async function getBlog(blogId) {
  try {
    const { data, status } = await axios.get(
      `${BASE_URL}api/blogs?filters[slug][$eq]=${blogId}&populate=*`
    );
    if (status !== 200) {
      return { error: "Failed to fetch blog data" };
    }
    const blogData = data?.data[0];
    // console.log(blogData,"tejas123")
    if (!blogData) {
      return { error: "Blog data is missing" };
    }

    const blog = {
      blogId: blogData?.id,
      blogDate: formatDate(blogData.attributes.updatedAt),
      title: blogData.attributes.title,
      description: blogData.attributes.description,
      img: BASE_URL + blogData.attributes.image.data.attributes.url,
      metaTitle: blogData?.attributes?.Seo?.metaTitle,
      metaDescription: blogData?.attributes?.Seo?.metaDescription,
      tags: blogData.attributes.tags.data.reduce(
        (tag, { attributes: { name } }) => {
          if (!tag) return `${name}`;
          return `${tag}, ${name}`;
        },
        ""
      ),
      tagsList: blogData.attributes.tags.data.map(
        ({ attributes: { name } }) => name
      ),
    };

    return blog;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return { error: "Blog not found" };
  }
}

async function getRelatedBlogs(tags) {
  try {
    const query = tags.reduce((queryAcc, tag) => {
      return (queryAcc += `&filters[$or][0][tags][name][$eq]=${encodeURI(
        tag
      )}`);
    }, "");
    // console.log(query);
    const { data, status } = await axios.get(
      `${BASE_URL}api/blogs?populate=*${query}`
    );

    if (status !== 200) {
      return[];
    }
    const blogs = data.data.map((blog) => {
      const blogData = {
        slug: blog?.attributes?.slug,
        blogId: blog?.id,
        blogDate: formatDate(blog.attributes.updatedAt),
        title: blog.attributes.title,
        summary: blog.attributes.summary,
        img: BASE_URL + blog.attributes?.image?.data?.attributes?.url,
      };
      return blogData;
    });
    // setblogs(blogs)
    // console.log(blogs,"inside")
    return blogs;
    //  console.log(blogs)
  } catch (error) {
    return [];
  }
}
export default async function page({ params }) {
  // console.log(params)
  // const { blogId } = useParams();
  // const [blog,setBlog] =useState(null)

  const blog = await getBlog(params.blogId);

  const relatedBlogs = await getRelatedBlogs(blog?.tagsList);

  // console.log(blog, "tejas")

  if (!blog || blog?.error) return <div> Blog Not found</div>;
  return (
    <MaxWidthWrapper>
      <div className="main-div-blog">
        <div className="blolg-metadata">
          <h1>{blog.title}</h1>

          <div className="date-container">
            <h3>{blog?.blogDate}</h3>
            <div>
              <img src={"/tag.svg"} /> <span>{blog.tags}</span>
            </div>
          </div>
        </div>
        <div className="blog-content">
          <img src={blog?.img} />

          <div className="blog-data">
            <BlocksRenderer content={blog?.description} />
          </div>
          {relatedBlogs?.length > 0 ? (
            <>
              <div className="releted-posts">
                <h4>Related posts</h4>
                <Cards blogs={relatedBlogs} />

                {/* <div className='releted-posts-list'>
            {relatedBlogs?.map(({
              title,
              summary,
              img,
              blogId,
              blogDate
            }) => {



              return <BlogCard title={title} blogDate={blogDate} summary={summary} img={img} blogId={blogId} />

            })}

           
          </div> */}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
