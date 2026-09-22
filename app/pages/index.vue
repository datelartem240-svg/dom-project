<script setup lang="ts">
import { posts } from "../components/content_for_universe_of_courage/posts"
const { t } = useI18n();
useHead({
  title: t("pages.index.meta.title"),
  meta: [{ name: "description", content: t("pages.index.meta.description") }],
});
useSeoMeta({
  title: t("pages.index.meta.title"),
  description: t("pages.index.meta.description"),
});
definePageMeta({
  layout: "default",
});
</script>
<template>

  <!--

    Page below is intended to be removed for your own project.
    This is just a demo.

   -->

  <div class="justify-center flex flex-col gap-4 py-5">
    <div  
        v-for="(block, i) in posts" :key="i" :id="block?.id"
        class="bg-[#f4f4f5] dark:bg-[#212e3b] rounded-lg px-4 py-3 whitespace-pre-wrap"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-slate-900 dark:text-white">{{block.text}}</h2>
      </div>
    </div>
  </div>
</template>



