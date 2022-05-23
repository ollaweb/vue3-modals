<template>
  <button class="btn btnPrimary" @click="login.show = !login.show">
    Log in
  </button>
  <Modal v-show="login.show" @close="onCloseLogin" title="Log in">
    <template v-slot:body>
      <form @submit.prevent="onSubmitLogin">
        <div class="form-item" :class="{ errorInput: v$.login.email.$error }">
          <label for="login">Login:</label>
          <p class="errorText" v-if="v$.login.email.required.$invalid">
            Field is required
          </p>
          <p class="errorText" v-if="v$.login.email.email.$invalid">
            Email is't correct!
          </p>
          <input
            v-model="login.email"
            type="email"
            name="login"
            placeholder="Enter your email"
            @change="v$.login.email.$touch"
          />
        </div>
        <div
          class="form-item"
          :class="{ errorInput: v$.login.password.$error }"
        >
          <label for="password">Password:</label>
          <p class="errorText" v-if="v$.login.password.required.$invalid">
            Field is required
          </p>

          <input
            v-model="login.password"
            type="password"
            name="password"
            placeholder="Enter your password"
            @change="v$.login.password.$touch"
          />
        </div>
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
        <input
          v-model="signup.email"
          type="email"
          name="login"
          placeholder="Enter your email"
        />
        <label for="password">Password:</label>
        <input
          v-model="signup.password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <label for="confirmPassword">Confirm password:</label>
        <input
          v-model="signup.confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Enter your password again"
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
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

import Modal from '@/components/UI/Modal.vue'

export default {
  components: {
    Modal
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      login: {
        show: false,
        email: '',
        password: ''
      },
      signup: {
        show: false,
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  validations() {
    return {
      login: {
        email: {
          required,
          email
        },
        password: {
          required
        }
      },
      signup: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(8)
        },
        confirmPassword: {
          required,
          minLength: minLength(8)
        }
      }
    }
  },
  methods: {
    clearLogin() {
      this.login.email = ''
      this.login.password = ''
      this.v$.login.$reset()
    },
    clearSignUp() {
      this.signup.email = ''
      this.signup.password = ''
      this.signup.confirmPassword = ''
      this.v$.signup.$reset()
    },
    onCloseLogin() {
      this.login.show = false
      this.clearLogin()
    },
    onCloseSignup() {
      this.signup.show = false
      this.clearSignUp()
    },
    onLogInModal() {
      this.login.show = false
      this.signup.show = true
    },
    onSignUpModal() {
      this.signup.show = false
      this.login.show = true
    },
    async onSubmitLogin() {
      const isFormCorrect = await this.v$.login.$validate()
      if (isFormCorrect) {
        const user = {
          email: this.login.email,
          password: this.login.password
        }
        console.log(user)
        this.clearLogin()
      }
    },
    async onSubmitSignUp() {
      const isFormCorrect = await this.v$.signup.$validate()
      if (isFormCorrect) {
        const user = {
          email: this.signup.email,
          password: this.signup.password
        }
        console.log(user)
        this.clearSignUp()
      }
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
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 14px;
  color: red;
}
.form-item {
  &.errorInput .errorText {
    display: block;
  }
}
input.error {
  border-color: red;
}
</style>
