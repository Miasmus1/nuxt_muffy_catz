const url = '/api/login';

export default ($fetch) => ({
  create(data) {
    return $fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
});
