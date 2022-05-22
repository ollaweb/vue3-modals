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
</template>

<script>
import Modal from '@/components/UI/Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      simpleModal: false
    }
  }
}
</script>
