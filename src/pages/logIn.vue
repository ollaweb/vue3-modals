<template>
  <button class="btn btnPrimary" @click="login.show = !login.show">
    Log in
  </button>
  <Modal v-show="login.show" @close="onCloseLogin" title="Log in">
    <template v-slot:body>
      <form @submit.prevent="">
        <label for="login">Login:</label>
        <input type="email" name="login" placeholder="Enter your email" />
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button class="btn btnPrimary">Log in</button>
        <div class="form-notes">
          <p>Don't have an account yet?</p>
          <p @click="onLogInModal">sign up</p>
        </div>
      </form>
    </template>
  </Modal>

  <!-- Sign Up -->

  <button class="btn btnPrimary" @click="signup.show = !signup.show">
    Sign Up
  </button>
  <Modal v-show="signup.show" @close="onCloseSignup" title="Registartion">
    <template v-slot:body>
      <form @submit.prevent="">
        <label for="login">Login:</label>
        <input type="email" name="login" placeholder="Enter your email" />
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <label for="confirmPassword">Password:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
        />
        <button class="btn btnPrimary">Sign up</button>
        <div class="form-notes">
          <p>Already have an account?</p>
          <p @click="onSignUpModal">log in</p>
        </div>
      </form>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/UI/Modal.vue'
export default {
  components: {
    Modal
  },
  data() {
    return {
      login: {
        show: false
      },
      signup: {
        show: false
      }
    }
  },
  methods: {
    onCloseLogin() {
      this.login.show = false
    },
    onCloseSignup() {
      this.signup.show = false
    },
    onLogInModal() {
      this.login.show = false
      this.signup.show = true
    },
    onSignUpModal() {
      this.signup.show = false
      this.login.show = true
    }
  }
}
</script>

<style lang="scss">
.form-notes {
  margin-top: 20px;
  & > :last-child {
    text-decoration: underline;
    color: #4468e0;
    cursor: pointer;
  }
}
</style>
