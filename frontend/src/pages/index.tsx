import BlogCards from "@/Components/BlogCards";
import { Blog } from "@/Components/BlogCard";
import fs from 'fs/promises';
import path from 'path';

// Function to fetch blogs data
async function getBlogs() {
  const blogsDirectory = path.join(process.cwd(), 'static/blogs');
  const filenames = await fs.readdir(blogsDirectory);

  const blogs = await Promise.all(filenames.map(async filename => {
    const filePath = path.join(blogsDirectory, filename);
    const content = await fs.readFile(filePath, 'utf8');
    return {
      title: content.split('\n')[0],
      description: content.split('\n')[1]
    };
  }));

  return blogs;
}

// Static generation function
export async function getStaticProps() {
  const blogs = await getBlogs();
  return {
    props: {
      blogs,
    },
    revalidate: 86400, // Optionally, revalidate once a day; adjust as needed
  };
}

// Page component that receives props from getStaticProps
export default function Home({ blogs }: { blogs: Blog[] }) {
  return <BlogCards blogs={blogs} />;
}
