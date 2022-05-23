<template>
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
    <slot name="body"></slot>
  </Modal>
</template>

<script>
import Modal from '@/components/UI/Modal.vue'

export default {
  components: {
    Modal
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
