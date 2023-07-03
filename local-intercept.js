function localIntercept(targets) {
  targets.of('@magento/pwa-buildpack').transformUpward.tap(def => {
    def.staticFromRoot.inline.body.file.template.inline =
      './fischer-static/{{ filename }}';
  });
  targets.of("@magento/venia-ui").routes.tap(routes => {
    routes.push({
      name: "HomePage",
      pattern: "/",
      path: require.resolve("./src/components/Home/index.js")
    })
    return routes;
  })
}

module.exports = localIntercept;
