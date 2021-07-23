const settings = {
  "name": "tutorial",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Mateus Faustino",
      "description": "WordPress installation for Frontity development"
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
        ["Books", "/books/"],
        ["Films", "/films/"],
        ["Events", "/tour/"],
        ["About", "/about/"]
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
          "url": "http://104.248.56.224/",
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