const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\mateus-theme\src\index.js</pre>
    </>
  );
};

export default {
  name: "mateus-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
