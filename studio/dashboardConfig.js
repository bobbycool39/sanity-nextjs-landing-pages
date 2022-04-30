export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '626d1bbdf34b1968c8c1a2bf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gjv5z5jg',
                  apiId: 'ac125fe1-a644-487e-8ed9-0102761ad49f'
                },
                {
                  buildHookId: '626d1bbd14958c6954f182ff',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-n1121kh1',
                  apiId: 'e1e81ec3-2fb3-4056-b9e1-af037f8cbf1d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bobbycool39/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-n1121kh1.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
