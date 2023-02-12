export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const { firebaseApiKey } = config;

  console.log(body);

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseApiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: body.email,
        password: body.password,
        returnSecureToken: true,
      }),
    }
  );

  if (!response.ok) {
    return await response.json();
  }

  const responseData = await response.json();
  setCookie(event, 'userInfo', JSON.stringify({ idToken: responseData.idToken }), { maxAge: responseData.expiresIn });
  return response.ok;
});
