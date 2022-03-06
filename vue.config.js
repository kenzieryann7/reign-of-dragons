module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? `/${process.env.VUE_APP_DEPLOY_PATH}/`
      : "/",
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: "default",
      overrideEndpoint: false,
      region: "us-west-2",
      bucket: "relic.oregonstate.education",
      createBucket: false,
      staticHosting: true,
      staticIndexPage: "index.html",
      staticErrorPage: "index.html",
      assetPath: "dist",
      assetMatch: "**",
      deployPath: `${process.env.VUE_APP_DEPLOY_PATH}/`,
      acl: "public-read",
      pwa: false,
      enableCloudfront: false,
      cloudfrontId: "E25V8K87R8LY63",
      cloudfrontMatchers: `${process.env.VUE_APP_DEPLOY_PATH}`,
      pluginVersion: "4.0.0-rc3",
      uploadConcurrency: 5
    }
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = `${process.env.VUE_APP_COURSE} | ${process.env.VUE_APP_TITLE}`;
      return args;
    });
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") {
      config.devtool = "source-map";
    }
  }
};
