<template>
  <section class="mb-32">
    <contact-google-map />
    <div
      class="max-w-[1440px] mx-auto rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300"
    >
      <div class="grid md:grid-cols-2 grid-cols-1 align-center">
        <contact-form />
        <contact-details />
      </div>
    </div>
  </section>
</template>
