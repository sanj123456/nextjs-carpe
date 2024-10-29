import React from 'react'
import "./ourBlogs.scss";
import { getBlogs } from '@/API/services';
import Cards from '../Cards';
import Link from 'next/link';
export default async function OurBlogs() {
    
  const { blogs = [] } =   await getBlogs(1, 5); // in case of error this function does not rturbn blogs. and default value of it  [] array
  
  return blogs?.length > 0 ? (
    <>
      <div className="our-blog ">
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div className="blog-heading-wrapper">
            <h2 className="our-blog-heading">Our Blogs</h2>
          </div>
          <div className="cards-wrapper">
            <Cards blogs={blogs} />
          </div>
          <div className="view-all-div-blog">
            <Link href={"/blog"}>
              <button className="view-all-btn-blog">View All</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
