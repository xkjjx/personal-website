interface Blog {
    title: string;
    description: string;
    content: string;
}


const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogCard;