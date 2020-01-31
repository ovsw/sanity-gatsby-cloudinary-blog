export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e33ea0a52044e0dc2eed1f1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-cloudinary-blog-studio',
                  apiId: 'e24df2bb-c8de-4016-8ca6-5d62de3d4b90'
                },
                {
                  buildHookId: '5e33ea0a1b9484c77faebbbb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-cloudinary-blog',
                  apiId: 'f1bc430b-ea2d-4385-96d8-494c0507fc7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ovsw/sanity-gatsby-cloudinary-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-cloudinary-blog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
