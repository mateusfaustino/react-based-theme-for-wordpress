import Root from "./components";
import link from "@frontity/html2react/processors/link";

export default {
  name: "mateus-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isUrlVisible: true,
    }
  },
  actions: {
    theme: {}
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
};
