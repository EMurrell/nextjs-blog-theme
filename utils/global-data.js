export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Eric Murrell';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Studies On Modern Technologies';
  const navText = process.env.BLOG_NAV_TEXT
    ? decodeURI(process.env.BLOG_NAV_TEXT)
    : 'Eric Murrell';

  return {
    name,
    blogTitle,
    navText,
  };
};
