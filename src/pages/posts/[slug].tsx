import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Container } from '@/components/blog/container';
import { PostBody } from '@/components/blog/post-body';
import { Header } from '@/components/layout/header';
import { PostHeader } from '@/components/blog/post-header';
import { Layout } from '@/components/layout/layout';
import { getPostBySlug, getAllPosts } from '@/features/blog/blog-posts.repo';
import { PostTitle } from '@/components/blog/post-title';
import Head from 'next/head';
import { markdownConverterSingleton } from '@/config/di-container';

const markdownConverter = markdownConverterSingleton().getInstance();

type Props = {
  post: any;
  morePosts: any;
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title}</title>
                {post.ogImage?.url && <meta property="og:image" content={post.ogImage.url} />}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage']);
  const content = await markdownConverter.toHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
