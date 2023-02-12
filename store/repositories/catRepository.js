const url = '/api/get-cat';

export default ($fetch) => ({
  show() {
    return $fetch(url);
  },
});
