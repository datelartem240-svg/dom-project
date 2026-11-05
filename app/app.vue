<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'

import { useI18n } from 'vue-i18n' 
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

  titleTemplate: function(title) {
    return title
      ? `${title} - ${t('site.name')}`
      : t('site.name')
  },
})
</script>

<template>
  <div class="relative">

    <!-- Страница ввода пароля -->
    

    <!-- Сайт -->
    <NuxtLayout>
      <div>
        <CookieBanner />
        <NuxtPage />
      </div>
    </NuxtLayout>

  </div>
</template>