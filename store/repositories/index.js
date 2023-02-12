import catRepository from './catRepository';
import userRepository from './userRepository';

export default ($fetch) => ({
  cat: catRepository($fetch),
  user: userRepository($fetch),
});
