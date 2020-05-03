import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export class BlogPostsRepository {
  folder: string;

  constructor() {
    this.folder = postsDirectory;
  }

  findAllFiles(): string[] {
    const files = fs.readdirSync(this.folder);
    if (Array.isArray(files)) {
      return files.filter((path) => path.match(/\.md$/));
    }
    return [];
  }
}

export function getPostSlugs(): string[] {
  const repo = new BlogPostsRepository();
  return repo.findAllFiles();
}

type Post = {
  [k: string]: string;
};

type PostAttributes = {
  title: string;
  date: string;
  slug: string;
  author: string;
  coverImage: string;
  ogImage: string;
  excerpt: string;
  content: string;
};

type PostFields = (keyof PostAttributes)[];

export function getPostBySlug(slug: string, fields: PostFields = []): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Post = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: PostFields = []): Post[] {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug, fields));
}
