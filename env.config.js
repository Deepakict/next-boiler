const PRODUCTION = {
    NEXT_PUBLIC_APP_VERSION:"0.0.1",
    NEXT_PUBLIC_APP_NAME:"sample-web-app",
    NEXT_PUBLIC_APP_DEBUG:"false",
    NEXT_PUBLIC_APP_ENV:"production",
    NEXT_PUBLIC_API_HOST_USER:"API",
    NEXT_PUBLIC_DYNAMIC_ROUTE_FALLBACK: true,
  };

  const STAGING = {
    NEXT_PUBLIC_APP_VERSION:"0.0.1",
    NEXT_PUBLIC_APP_NAME:"sample-web-app",
    NEXT_PUBLIC_APP_DEBUG:"false",
    NEXT_PUBLIC_APP_ENV:"staging",
    NEXT_PUBLIC_API_HOST_USER:"API",
    NEXT_PUBLIC_DYNAMIC_ROUTE_FALLBACK: true,
  };

  const LOCAL = {
    NEXT_PUBLIC_APP_VERSION:"0.0.1",
    NEXT_PUBLIC_APP_NAME:"sample-web-app",
    NEXT_PUBLIC_APP_DEBUG:"false",
    NEXT_PUBLIC_APP_ENV:"development",
    NEXT_PUBLIC_API_HOST_USER:"API",
    NEXT_PUBLIC_DYNAMIC_ROUTE_FALLBACK: false,
  };

  const config =
    process.env.NEXT_PUBLIC_ENV === "production"
      ? PRODUCTION
      : process.env.NEXT_PUBLIC_ENV === "staging"
        ? STAGING
        : LOCAL;

export default config;
