/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
     {
       resolve: `gatsby-plugin-prefetch-google-fonts`,
       options: {
         fonts: [
           {
             family: `Vollkorn`,
             variants: [`600`, `500`]
           },
           
         ],
       },
     }
   ]
 }