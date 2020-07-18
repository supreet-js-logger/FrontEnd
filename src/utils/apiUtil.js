const COMMON_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const COMMON_CREDENTIALS = "include";
export const hitApi = async (
  relativeUrl,
  method,
  data,
  addonHeaders,
  credentials = COMMON_CREDENTIALS,
) => {
  let urlToHit = `${process.env.API_URL}${relativeUrl}`;
  let headers = { ...COMMON_HEADERS, addonHeaders };
  let fetchOptions = { method, credentials, headers };
  if (data) fetchOptions.body = data && JSON.stringify(data);
  let response = await fetch(urlToHit, fetchOptions);
  const contentType = response.headers.get("content-type");
  if (
    !(contentType && contentType.indexOf("application/json") !== -1) &&
    !response.ok
  ) {
    throw response;
  }
  let result = await response.json();
  return result;
};

export const getApi = async (
  relativeUrl,
  addonHeaders = {},
  credentials = COMMON_CREDENTIALS,
) => {
  return await hitApi(relativeUrl, "GET", null, addonHeaders, credentials);
};

export const postApi = async (
  relativeUrl,
  data,
  addonHeaders = {},
  credentials = COMMON_CREDENTIALS,
) => {
  return await hitApi(relativeUrl, "POST", data, addonHeaders, credentials);
};
