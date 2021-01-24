// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /* Before is the configuration of Contentful CMS, which this portfolio template assumes you will use
  for blog posts, projects, etc.. You are welcome to change to another CMS (i.e. WordPress), but remember
  to edit this file to include the configurations for the CMS you wish to use. */
  contentful_config: {
    space: 'YOUR CONTENTFUL SPACE ID HERE',
    accessToken: 'YOUR CONTENTFUL ACCESS TOKEN HERE',

    /* Change these field names to point to the content type names of your blog posts, projects, etc. */
    contentTypeIds: {
      blogPost: 'blog-post',
      portfolioProject: 'portfolio-project',
      resume: 'resume'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
