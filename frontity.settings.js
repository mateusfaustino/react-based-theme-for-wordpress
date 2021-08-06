const settings = {
  "name": "tutorial",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Mateus Faustino",
      "description": "Olá! Me chamo Mateus e aqui compartilho minhas andanças, visão de mundo e nerdices."
    }
  },
  "packages": [
{
  name: "@frontity/google-analytics",
  state: {
    googleAnalytics: {
      trackingId: "G-HCKRGNSG65",
    },
  },
},
    
{
  name: "matt-theme",
  // name: "mateus-theme",
  state: {
    theme: {
      menu: [
        ["Home", "/"],
        ["Portifólio", "/category/portifolio/"],
        ["Línguas", "/category/linguas/"],
        
      ],
      featured: {
        showOnList: true,
        showOnPost: true
      }
    }
  },
},
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://mateusfaustino.com.br",
          "postTypes": [
            {
              type: "destinations",
              endpoint: "destinations",
              archive: "/destinations"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;