<template>
  <q-page class="q-pa-md bg-dark text-white">
    <h2 class="q-mb-lg text-center text-info">Get In Touch</h2>

    <q-form
      @submit="submitForm"
      class="q-pa-lg"
      style="max-width: 600px; margin: 0 auto"
    >
      <q-input
        v-model="form.name"
        label="Your Name"
        filled
        class="q-mb-md"
        style="background-color: #333; color: white; border: 1px solid #1e88e5"
        label-color="white"
      />
      <q-input
        v-model="form.email"
        label="Your Email"
        type="email"
        filled
        class="q-mb-md"
        style="background-color: #333; color: white; border: 1px solid #1e88e5"
        label-color="white"
      />
      <q-input
        v-model="form.message"
        label="Your Message"
        type="textarea"
        filled
        class="q-mb-md"
        style="background-color: #333; color: white; border: 1px solid #1e88e5"
        label-color="white"
      />

      <q-btn
        type="submit"
        label="Send Message"
        color="primary"
        class="q-mt-md full-width"
      />
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  if (form.value.name && form.value.email && form.value.message) {
    alert(`Thank you, ${form.value.name}. Your message has been sent!`);
    form.value = { name: "", email: "", message: "" };
  } else {
    alert("Please fill out all fields.");
  }
};
</script>

<style scoped>
/* Ensure the form is responsive on smaller screens */
.full-width {
  width: 100%;
}

@media (max-width: 600px) {
  /* Adjust padding for smaller screens */
  .q-pa-lg {
    padding: 16px;
  }
}
</style>
