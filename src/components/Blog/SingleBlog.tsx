import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  blog: {
    id: string | number;
    title: string;
    image: string;
    description?: string;
    slug: string;
    author: string;
    tags?: string | string[];
    category?: string;
    content?: string;
    createdAt?: string;
  };
}

const SingleBlog = ({ blog }: BlogProps) => {
  const { title, image, description, author, tags, slug, createdAt, content } = blog;
  
  // Parse tags if it's a string
  const tagArray = typeof tags === "string" 
    ? (tags.startsWith("[") ? JSON.parse(tags) : tags.split(",")) 
    : (Array.isArray(tags) ? tags : []);
  
  const firstTag = Array.isArray(tagArray) ? tagArray[0] : tagArray || "General";
  const formattedDate = createdAt ? new Date(createdAt).toLocaleDateString("id-ID") : "N/A";

  return (
    <>
      <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300 hover-lift transition-all stagger-item">
        <Link
          href={`/blog-details`}
          className="relative block aspect-37/22 w-full transition-transform group-hover:scale-105"
        >
          <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize animate-scale-in group-hover:scale-110 transition-transform">
            {firstTag}
          </span>
          <Image src={image} alt={title} fill className="object-cover" />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/blog/${slug}`}
              className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white transition-colors"
            >
              {title}
            </Link>
          </h3>
          <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
            {description || content || "No description available"}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h4 className="text-dark text-sm font-medium dark:text-white">
                By {author}
              </h4>
            </div>
            <div className="inline-block">
              <p className="text-body-color text-xs">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
