<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'

const { locale, t } = useI18n()

const isLoading = ref(true)
const password = ref('')
const secret_key = 'begompodstol123'

const isUnlocked = computed(() => {
  return password.value === secret_key
})

if (import.meta.client) {
  const storedLanguage = localStorage.getItem('nuxt-lang')

  if (storedLanguage && storedLanguage !== 'en-US') {
    locale.value = storedLanguage
  }
}

onMounted(() => {
  nextTick(() => {
    isLoading.value = false
  })
})

useHead({
  htmlAttrs: {
    lang: locale,
    dir: computed(() => {
      return t('locale.dir') as 'ltr' | 'rtl' | 'auto'
    }),
  },

  titleTemplate(title) {
    return title
      ? `${title} - ${t('site.name')}`
      : t('site.name')
  },
})
</script>

<template>
  <div class="relative">

    <!-- Страница ввода пароля -->
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

    <!-- Сайт -->
    <NuxtLayout v-else>
      <div>
        <CookieBanner />
        <NuxtPage />
      </div>
    </NuxtLayout>

  </div>
</template>