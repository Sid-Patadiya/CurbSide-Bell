const devConfig = {
  BASE_URI: "https://devapi.curbsidebell.com/",
  OMNI_SITE_TOKEN: "site_63Vdsmr9Qsq0",
  IMG_BASE_URI: "https://fs1.cloudsnob.com/static/5febb4ab123425069aaa9b9f/",
  SUBSCRIBE_NEWSLETTER: "https://xapi.forms.cloudsnob.com/post",
  FORM_TOKEN: "aIbhV8IxZowfN2OsFkoJLLkwJaRPsql98S8enUkEcf9QLkuc8U",
  SITE_KEY: '6Lc7rSYpAAAAANdsrOrxfshNoTfv9Vr7WtBSbAEn',
  baseUrl: 'http://umsupplies.com'
};

const prodConfig = {
  ...devConfig,
  BASE_URI: "https://devapi.curbsidebell.com/",
};

module.exports = process.env.NODE_ENV === "production" ? prodConfig : devConfig;


