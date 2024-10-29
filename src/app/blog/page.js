"use client";
import React, { useEffect, useRef, useState } from "react";
import "./blogs.scss";
import BlogCard from "@/Components/BlogCard";
import Pagination from "@/Components/Pagination";

import axios from "axios";
import { BASE_URL } from "@/util/constant";
import { formatDate } from "@/util/helper";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { getBlogs } from "@/API/services";

const Blogs = () => {
  const [blogs, setblogs] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [paginationData, setPaginationData] = useState({
    page: 1,
    pageSize: "",
    pageCount: "",
    total: "",
  });
  const ref = useRef();
  useEffect(() => {
    (async () => {
      const { paginationData, blogs } = await getBlogs(pageNo, window?.innerWidth <= 1435 ? 10: 9);
      setPaginationData(paginationData);
      setblogs(blogs);
      if (ref.current) {
        setTimeout(() => {
          ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
      // console.log(blogs);
    })();
  }, [pageNo]);
  return (
    <div id="main-div-blogs">
      <section>
        <div className="bg-cover">
          <MaxWidthWrapper>
            <h1 className="main-padding">
              Navigating the Used Car <br />
              Finance Process
            </h1>
          </MaxWidthWrapper>
        </div>
      </section>

      <MaxWidthWrapper>
        <section ref={ref} className="blogs-list-container main-padding">
          {blogs?.map(({ title, summary, img, blogId, blogDate, slug }) => {
            return (
              <BlogCard
                slug={slug}
                title={title}
                blogDate={blogDate}
                summary={summary}
                img={img}
                blogId={blogId}
              />
            );
          })}
        </section>

        <Pagination
          setcurruntPage={setPageNo}
          curruntPage={paginationData?.page}
          pageCount={paginationData?.pageCount}
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default Blogs;
