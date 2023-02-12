export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  const { catApiKey } = config;
  const headers = {
    headers: {
      'x-api-key': catApiKey,
    },
  };

  const response = await fetch('https://api.thecatapi.com/v1/images/search', headers);
  const [responseData] = await response.json();

  return responseData.url;
});
