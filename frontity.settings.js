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
  name: "matt-theme",
  // name: "mateus-theme",
  state: {
    theme: {
      menu: [
        ["Home", "/"],
        ["Cultura", "/category/cultura/"],
        ["Memes", "/category/memes/"],
        
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