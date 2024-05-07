import {marked} from 'marked';
import fs from 'fs/promises';
import path from 'path';

const processTextIntoID = (text: string) => {
    return text.replace(/ /g, '-').toLowerCase();
}

export default function Blog({ htmlContent }: any) {
    return <div className="bg-base-100" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

let renderer = new marked.Renderer();




renderer.heading = function(text, level) {
    return `<h${level} class="${getHeadingClass(level)}" id="${processTextIntoID(text)}">${text}</h${level}>`;
};

renderer.paragraph = function(text) {
    return `<p class="mx-32 my-3 font-mono text-primary">${text}</p>`;
};

renderer.list = function(body, ordered) {
    let type = ordered ? 'ol' : 'ul';
    return `<${type} class="mx-32 my-3 font-serif text-secondary font-bold">${body}</${type}>`;
}

function getHeadingClass(level: number): string {
    switch (level) {
        case 1:
            return "text-4xl mx-32 my-3 font-serif text-secondary";
        case 2:
            return "text-2xl mx-32 my-3 font-serif text-secondary";
        case 3:
        case 4:
        case 5:
        case 6:
        default:
            return ""; // Or any default class you want to apply
    }
}

export async function getStaticProps({ params }: any) {
    const { id } = params;
    const markdownFilePath = path.join(process.cwd(), `static/blogs/${id}.md`);
    const markdownContent = await fs.readFile(markdownFilePath, 'utf8');

    const htmlContent = marked.parse(markdownContent, { renderer });
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
