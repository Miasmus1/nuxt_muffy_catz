<template>
  <div class="form-container">
    <div class="background">
      <div class="shape" />
      <div class="shape" />
    </div>
    <form @submit.prevent="login">
      <h3>Log In</h3>

      <label for="email">E-mail</label>
      <input
        id="email"
        v-model.trim="userCredentials.email"
        type="email"
        placeholder="Enter your e-mail"
        required
      >

      <label for="password">Password</label>
      <input
        id="password"
        v-model.trim="userCredentials.password"
        type="password"
        placeholder="Enter your password"
        minlength="6"
        required
      >

      <button>Log In</button>
    </form>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();

const userCredentials = ref({
  email: 'toygarsaral@icloud.com',
  password: '123456',
});

async function login() {
  if (
    !userCredentials.value.email.trim() ||
    !userCredentials.value.password.trim()
  ) {
    alert('E-mail and Password are required');
  }

  const responseData = await nuxtApp.$repositories.user.create(
    userCredentials.value
  );

  if (responseData.error) {
    alert(responseData.error.message);
  } else {
    navigateTo('/cats');
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  width: 44rem;
  height: 44rem;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

  @include responsive(mobile) {
    display: none;
  }
}

.background .shape {
  height: 20rem;
  width: 20rem;
  position: absolute;
  border-radius: 50%;
}

.shape:first-child {
  background: linear-gradient(#1845ad, #23a2f6);
  left: -80px;
  top: -80px;
}

.shape:last-child {
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -30px;
  bottom: -80px;
}

form {
  width: 34rem;
  background-color: rgba(255, 255, 255, 0.01);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

form * {
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

::placeholder {
  color: #e5e5e5;
}

button {
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
</style>
