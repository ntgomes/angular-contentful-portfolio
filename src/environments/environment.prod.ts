/* Remember to copy any necessary tokens and fields from environment.ts to this production version. */

export const environment = {
  production: true,
  contentful_config: {
    space: 'YOUR CONTENTFUL SPACE ID HERE',
    accessToken: 'YOUR CONTENTFUL ACCESS TOKEN HERE',

    contentTypeIds: {
      blogPost: 'blog-post',
      portfolioProject: 'portfolio-project',
      resume: 'resume'
    }
  }
};
