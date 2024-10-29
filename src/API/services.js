

// export function fetchBlogs(){
// try {
//     const
// } catch (error) {

import { BASE_URL } from "@/util/constant";
import { formatDate } from "@/util/helper";
import axios from "axios";

// }

// }


export async function getBlogs(pageNo = 1, pageSize = 9) {
    try {
        const { data, status } = await axios.get(
            `${BASE_URL}api/blogs?pagination[page]=${pageNo}&pagination[pageSize]=${pageSize}&sort[0]=createdAt:desc&populate=*`
        );
    //please update this logic for fetch data
        if (status !== 200) {
            return { errMessage: "blogs not found", paginationData:null, blogs:[] };
        }
        const blogs = data.data.map((blog) => {
            const blogData = {
                slug: blog?.attributes?.slug,
                blogId: blog?.id,
                blogDate: formatDate(blog?.attributes?.updatedAt),
                title: blog.attributes?.title,
                summary: blog?.attributes?.summary,
                img: BASE_URL + blog?.attributes?.image?.data?.attributes.url,
            };
            return blogData;
        });
        const paginationData = data.meta.pagination
        return { paginationData, blogs }
    } catch (error) {
        console.log(error)
        return error
    }

}