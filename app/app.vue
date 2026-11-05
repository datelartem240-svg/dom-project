<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'

import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const isLoading = ref(true)
const password = ref('')

const secretKey = 'password125'

const isUnlocked = computed(() => {
  return password.value === secretKey
})

onMounted(async () => {
  const storedLanguage = localStorage.getItem('nuxt-lang')

  if (storedLanguage) {
    locale.value = storedLanguage
  }

  await nextTick()
  isLoading.value = false
})

useHead({
  htmlAttrs: {
    lang: locale,
    dir: computed(() => t('locale.dir') as 'ltr' | 'rtl' | 'auto'),
  },

  titleTemplate: (title) => {
    return title
      ? `${title} - ${t('site.name')}`
      : t('site.name')
  },
})
</script>

<template>
  <div class="relative">
    <div
      v-if="!isUnlocked"
      class="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#0d1117]"
    >
      <input
        v-model="password"
        type="password"
        placeholder="Введите пароль"
        class="rounded border px-4 py-2"
      />
    </div>

    <NuxtLayout v-else>
      <CookieBanner />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>