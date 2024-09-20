<template>
  <div
    class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:px-6 py-5"
  >
    <form @submit.prevent="sendEmail">
      <div class="relative mb-6">
        <input
          type="text"
          class="peer block pt-[20px] min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
          id="exampleInputName"
          v-model="name"
        />
        <label
          class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]"
          for="exampleInputName"
          >Name</label
        >
      </div>
      <div class="relative mb-6">
        <input
          type="email"
          class="peer block pt-[20px] min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
          id="exampleInputEmail"
          v-model="email"
        />
        <label
          class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]"
          for="exampleInputEmail"
          >E-mail</label
        >
      </div>
      <div class="relative mb-6">
        <input
          type="text"
          class="peer block pt-[20px] min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
          id="exampleInputSubject"
          v-model="subject"
        />
        <label
          class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]"
          for="exampleInputSubject"
          >Subject</label
        >
      </div>
      <div class="relative mb-6">
        <textarea
          v-model="message"
          class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 pt-[20px]"
          id="exampleFormControlTextarea"
          rows="3"
        ></textarea>
        <label
          for="exampleFormControlTextarea"
          class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]"
          >Message</label
        >
      </div>
      <button
        :disabled="requestPending ? true : false"
        :class="{ 'cursor-not-allowed opacity-55': requestPending }"
        type="submit"
        class="mb-6 w-full rounded bg-primary text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0"
      >
        {{ requestPending ? "Sending..." : "Send" }}
      </button>
    </form>
    <p
      class="py-3"
      v-if="statusMessage"
      :class="
        statusMessage.type === 'success' ? 'text-green-500' : 'text-red-500'
      "
    >
      {{ statusMessage.message }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const subject = ref("");
const email = ref("");
const message = ref("");

const statusMessage = ref<{
  message: string;
  type: "success" | "error";
} | null>(null);

const requestPending = ref(false);

const sendEmail = async () => {
  try {
    requestPending.value = true;
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        subject: subject.value,
        email: email.value,
        message: message.value,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      statusMessage.value = { message: result.message, type: "success" };
      name.value = "";
      subject.value = "";
      email.value = "";
      message.value = "";
    } else {
      statusMessage.value = { message: result.message, type: "error" };
    }
  } catch (error) {
    statusMessage.value = { message: "An error occurred.", type: "error" };
  } finally {
    setTimeMessage();
    requestPending.value = false;
  }
};

const props = defineProps({
  subject: {
    type: String,
  }
});

const setTimeMessage = () => {
  setTimeout(() => {
    statusMessage.value = null;
  }, 3000);
};

onMounted(() => {
  if (props.subject) {
    subject.value = props.subject;
  }
});
</script>