const settings = {
    'about':{
        'name':'matt-template',
        'description':`
            I've made this app as a Template for my own projects.`,
        },
        'documentation':{    
            'directories':[
                {
                    'title':'assets',
                    'descripton':`
                        All the assets used in this project. 
                    `
                },
                {
                    'title':'components',
                    'descripton':`
                        All the React componentes of this project. 
                        there are two types of components: styleguide and this-project component.
                        each one will be introduced in this article.
                    `
                },
                {
                    'title':'components/styleguide',
                    'descripton':`
                        I use my own style system based on Material Design,
                         a design system created by Google.
                    `
                },
                {
                    'title':'components/this-project',
                    'descripton':`
                        Inside this-project folder there are all the components built exclusively for this project. 
                    `
                },
                {
                    'title':'context',
                    'descripton':`
                        All the contexts and providers. 
                    `
                },
                {
                    'title':'pages',
                    'descripton':`
                        All the pages components. 
                    `
                },
                {
                    'title':'services',
                    'descripton':`
                        inside this folder there are the outside apis configurations. 
                    `
                },
            ]
    },
    author:{
        'name':'Mateus Faustino',
        'description':'',
        'sicial-medias':[
            {
                'name':'Linkedin',
                'link':''
            },
            {
                'name':'GitHub: @mateusfaustino',
                'link':''
            },
            {
                'name':'Email: mateusfaustino2017@gmail.com',
                'link':''
            },
            
        ] 
    },
    'menu':[
        {
            title:'about',
            link:'/about'   
        },
        {
            title:'author',
            link:'/author'   
        },
        {
            title:'settings',
            link:'/settings'   
        },
        {
            title:'other',
            link:'/other'   
        },
    ],
  }
  
  export const menu = settings.menu 
  export default settings;