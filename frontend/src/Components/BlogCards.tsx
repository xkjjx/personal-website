import { BlogCard, Blog } from "./BlogCard";
import marked from "marked";

type BlogCardsProps = {
  blogs: Blog[];
};

export default function BlogCards(props: BlogCardsProps) {
  
  return (
    <div>
      {props.blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
}
