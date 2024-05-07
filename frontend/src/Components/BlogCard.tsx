export interface Blog {
    title: string;
    description: string;
}


export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
    </div>
  );
}
