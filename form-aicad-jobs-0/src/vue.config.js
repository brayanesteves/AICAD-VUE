const path = require("path");
const PrerenderSpaPlugin = require("prerender-spa-plugin");

const productionPlugins = [
  new PrerenderSpaPlugin({
    // staticDir: path.join(__dirname, 'dist'),
    staticDir: path.join(__dirname, "dist"),
    outputDir: path.join(__dirname, "dist/"),
    indexPath: path.join(__dirname, "dist", "/index.html"),
    routes: [
      "/",
      "/error",
      "/profile",
      "/profile/ajustes",
      "/profile/ajustes/datos-acceso",
      "/profile/ajustes/notificaciones-y-consejos",
      "/profile/ajustes/privacy",
      "/profile/help",
      "/profile/help/access-profile",
      "/profile/help/contact-network",
      "/profile/help/cv-my-data",
      "/profile/help/email-notifications-alerts",
      "/profile/help/executive-accounts",
      "/profile/help/offers-and-recommendations",
      "/profile/help/registrations-and-applications",
      "/profile/help/unsubscribe",
      "/profile/help/who-sees-me"
    ],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: "meta[name='description']",
      inject: {
        isPrerender: true
      },
      headless: false
    })
  })
];

module.exports = {
  publicPath: "/",
  outputDir: path.join(__dirname, "dist/"),
  lintOnSave: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(...productionPlugins);
    }
  }
};
