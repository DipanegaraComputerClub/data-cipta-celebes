"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  author: string;
  category: string;
  tags: string;
  content: string;
  createdAt: string;
}

const Blog = () => {
  const ref = useScrollAnimation();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs?limit=3");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <section id="blog" className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="text-center">Loading blogs...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 slide-right"
      ref={ref}
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Pelajari tips, trik, dan insight terbaru tentang transformasi digital dan pengembangan aplikasi custom."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
