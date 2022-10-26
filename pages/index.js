import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Nav />

      <main className="w-full">
        <h2 className="px-4 mb-12 text-xl text-neutral-700 dark:text-neutral-400 font-medium text-left lg:text-2xl">
          Hello! <br /> I&apos;m Eric, a writer and web developer. I work with
          agencies and SaaS startups to create and market compelling digital
          products.
        </h2>
        <h1 className="pl-4 mb-12 text-3xl font-bold text-left lg:text-4xl">
          {globalData.blogTitle}
        </h1>

        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="transition bg-white border border-b-0 border-neutral-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none ">
                  {post.data.date && (
                    <p className="mb-3 font-bold uppercase opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
