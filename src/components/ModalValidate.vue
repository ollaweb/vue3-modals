<template>
  <Modal title="Form Modal Window with Validation" @close="onClose">
    <template v-slot:body>
      <form @submit.prevent="onSubmit">
        <div class="form-item" :class="{ errorInput: v$.name.$error }">
          <label for="name">Name:</label>
          <p class="errorText" v-if="v$.name.required.$invalid">
            Field is required
          </p>
          <p class="errorText" v-if="v$.name.minLength.$invalid">
            Name can't be less than {{ v$.name.minLength.$params.min }} symbols
          </p>
          <input
            :class="{ error: v$.name.$error }"
            v-model="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            @change="v$.name.$touch"
          />
        </div>

        <div class="form-item" :class="{ errorInput: v$.email.$error }">
          <label for="email">Email:</label>
          <p class="errorText" v-if="v$.email.required.$invalid">
            Field is required
          </p>
          <p class="errorText" v-if="v$.email.email.$invalid">
            Email is't correct!
          </p>
          <input
            :class="{ error: v$.email.$error }"
            v-model="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            @change="v$.email.$touch"
          />
        </div>
        <button class="btn btnPrimary">Submit</button>
      </form>
    </template>
  </Modal>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
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
      name: '',
      email: ''
    }
  },
  validations() {
    return {
      name: { required, minLength: minLength(2) },
      email: { required, email }
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
      this.name = ''
      this.email = ''
      this.v$.$reset()
    },
    async onSubmit() {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) {
        const user = {
          name: this.name,
          email: this.email
        }
        console.log(user)
        this.name = ''
        this.email = ''
        this.v$.$reset()
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss">
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
