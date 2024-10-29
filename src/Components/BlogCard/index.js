"use client";
import React, { useEffect, useState } from 'react'
import "./blog-card.scss"
import Link from 'next/link'
import Button from '../Button/Index'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
export default function BlogCard({ title, blogDate, summary,  img ,blogId, slug  }) {
    const [isBlogs, setIsBlogs] = useState(false)
    const pathname = usePathname()
    // const isOnBlogsPage = router.pathname === '/blog'
    useEffect(()=>{
        setIsBlogs(pathname === '/blog')
    },[pathname])
    return (
        <div className='blog'>
            <Image width={317} height={117} className='blog-img' src={img} />
            <Link href={`/blog/${slug}`}>
            <h2 className='blog-name'>
                {title}
            </h2>
            </Link>
            <h2 className='blog-date'>
                {blogDate}
            </h2>
            <p className='blog-content'>
                {summary?.substring(0, 200).trim()}
            </p>
            {/* <Link className='link' href={`/blog/${slug}`}>
                <Button name={"Read More"} className="read-more" />
            </Link> */}
            {isBlogs && (
                <Link className='link' href={`/blog/${slug}`}>
                    <Button name={"Read More"} className="read-more" />
                </Link>
            )}

        </div>
    )
}
