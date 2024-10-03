export const buildParamsSearchs = (baseURL, params) => {
  const url = new URL(baseURL);
  Object.keys(params).forEach((key) => {
    if (params[key] !== null && params[key] !== undefined) {
      url.searchParams.append(key, params[key]);
    }
  });
  return url.toString();
};
