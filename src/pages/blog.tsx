import { Container } from '@/components/blog/container';
import { MoreStories } from '@/components/blog/more-stories';
import { HeroPost } from '@/components/blog/hero-post';
import { Intro } from '@/components/blog/intro';
import { getAllPosts } from '@/features/blog/blog-posts.repo';
import Head from 'next/head';
import React from 'react';
import { AuthLayout } from '@/components/layout/auth-layout';

type Props = {
  allPosts: any[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <AuthLayout>
        <Head>
          <title>Thoughtless mind blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </AuthLayout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
}
