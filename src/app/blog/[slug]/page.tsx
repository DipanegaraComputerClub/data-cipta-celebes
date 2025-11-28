"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";

interface Blog {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  author: string;
  tags: string;
  publishDate: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch("/api/blogs");
        const allBlogs: Blog[] = await response.json();
        
        // Find blog by slug
        const foundBlog = allBlogs.find((b) => b.slug === slug);
        
        if (!foundBlog) {
          setError("Blog tidak ditemukan");
          setIsLoading(false);
          return;
        }
        
        setBlog(foundBlog);
        
        // Get related blogs (exclude current blog, limit to 3)
        const related = allBlogs
          .filter((b) => b.slug !== slug)
          .slice(0, 3);
        setRelatedBlogs(related);
        
      } catch (error) {
        console.error("Failed to fetch blog:", error);
        setError("Gagal memuat blog");
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchBlogDetail();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="text-center">
            <p className="text-xl text-body-color dark:text-body-color-dark">
              Loading...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !blog) {
    return (
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-black dark:text-white">
              {error || "Blog tidak ditemukan"}
            </h1>
            <Link
              href="/#blog"
              className="inline-block rounded-lg bg-primary px-8 py-3 text-center text-base font-semibold text-white hover:bg-primary/90"
            >
              Kembali ke Blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const tags = blog.tags ? blog.tags.split(",").map((tag) => tag.trim()) : [];
  const formattedDate = new Date(blog.publishDate || blog.createdAt).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                {/* Blog Header */}
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {blog.title}
                </h1>

                {/* Meta Info */}
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color/10 pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">
                            {blog.author.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color dark:text-body-color-dark">
                          By{" "}
                          <span className="text-black dark:text-white">
                            {blog.author}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                        {formattedDate}
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <SharePost />
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-10">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44] overflow-hidden rounded-md">
                    <Image
                      src={blog.image || "/images/blog/blog-01.jpg"}
                      alt={blog.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Blog Content */}
                <div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                    {blog.description}
                  </p>
                  
                  <div 
                    className="prose prose-lg max-w-none dark:prose-invert text-body-color dark:text-body-color-dark"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />

                  {/* Tags */}
                  {tags.length > 0 && (
                    <div className="mt-12 flex flex-wrap items-center border-t border-body-color/10 pt-8 dark:border-white/10">
                      <span className="mr-4 text-base font-medium text-black dark:text-white">
                        Tags:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                          <TagButton key={index} text={tag} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar - Related Posts */}
            <div className="w-full px-4 lg:w-4/12">
              <div className="shadow-three dark:shadow-none rounded-sm bg-white px-6 py-8 dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h2 className="border-b border-body-color/10 pb-4 text-2xl font-semibold text-black dark:border-white/10 dark:text-white">
                  Blog Terkait
                </h2>
                <div className="mt-8 space-y-6">
                  {relatedBlogs.length > 0 ? (
                    relatedBlogs.map((relatedBlog) => (
                      <Link
                        key={relatedBlog.id}
                        href={`/blog/${relatedBlog.slug}`}
                        className="group block"
                      >
                        <div className="flex items-start">
                          <div className="relative mr-4 h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={relatedBlog.image || "/images/blog/blog-01.jpg"}
                              alt={relatedBlog.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-2 text-sm font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary line-clamp-2 transition-colors">
                              {relatedBlog.title}
                            </h3>
                            <p className="text-xs text-body-color dark:text-body-color-dark">
                              {new Date(relatedBlog.publishDate || relatedBlog.createdAt).toLocaleDateString("id-ID", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      Tidak ada blog terkait
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
