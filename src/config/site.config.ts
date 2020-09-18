const getSite = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://skunkies.soluble.vercel.app';
  }
  return 'http://localhost:3000';
};

export const siteConfig = {
  siteUrl: getSite(),
};
