<template>
  <button class="btn btnPrimary" @click="simpleModal = !simpleModal">
    Show Simple Modal
  </button>
  <Modal
    v-show="simpleModal"
    title="Simple Modal Window"
    @close="simpleModal = false"
  >
    <template v-slot:body>
      <p>Congratulations! You opened Simple Modal Window!</p>
      <br />
      <button class="btn btnPrimary" @click="simpleModal = !simpleModal">
        Well done!
      </button>
    </template>
  </Modal>

  <button class="btn btnPrimary" @click="formModal.show = !formModal.show">
    Show Form Modal
  </button>
  <Modal
    v-show="formModal.show"
    title="Form Modal Window"
    @close="formModal.show = false"
  >
    <template v-slot:body>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input
          required
          v-model="formModal.name"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <label for="email">Email:</label>
        <input
          required
          v-model="formModal.email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <button class="btn btnPrimary">Submit</button>
      </form>
    </template>
  </Modal>

  <button
    class="btn btnPrimary"
    @click="validateModal.show = !validateModal.show"
  >
    Show Form Modal with Validation
  </button>
  <ModalValidate
    v-show="validateModal.show"
    @close="validateModal.show = false"
  ></ModalValidate>
</template>

<script>
import Modal from '@/components/UI/Modal.vue'
import ModalValidate from '@/components/ModalValidate.vue'

export default {
  components: {
    Modal,
    ModalValidate
  },
  data() {
    return {
      simpleModal: false,
      formModal: {
        show: false,
        name: '',
        email: ''
      },
      validateModal: {
        show: false
      }
    }
  },
  methods: {
    submitForm() {
      console.log({
        name: this.formModal.name,
        email: this.formModal.email
      })
      this.formModal.show = false
      this.formModal.name = ''
      this.formModal.email = ''
    }
  }
}
</script>
