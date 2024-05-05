import {marked} from 'marked';
import fs from 'fs/promises';
import path from 'path';

export default function Blog({ htmlContent }: any) {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export async function getStaticProps({ params }: any) {
    const { id } = params;
    const markdownFilePath = path.join(process.cwd(), `static/blogs/${id}.md`);
    const markdownContent = await fs.readFile(markdownFilePath, 'utf8');

    // Convert markdown to HTML
    const htmlContent = marked.parse(markdownContent);

    return {
        props: {
            htmlContent
        }
    };
}

export async function getStaticPaths() {
    const blogsDirectory = path.join(process.cwd(), 'static/blogs');
    const filenames = await fs.readdir(blogsDirectory);

    const paths = filenames.map(filename => ({
        params: {
            id: filename.replace(/\.md$/, '')
        }
    }));

    return {
        paths,
        fallback: false
    };
}
