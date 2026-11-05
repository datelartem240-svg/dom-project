<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n' 

const { locale, t } = useI18n()

const isLoading = ref(true)
const password = ref('')
const secret_key = 'begompodstol123'

// 1. Добавляем флаг, чтобы знать, загрузились ли мы в браузере
const isClient = ref(false)

// 2. Логика разблокировки: на сервере всегда false, в браузере - по паролю
const isUnlocked = computed(() => {
  // Если мы на сервере (пререндеринг), всегда возвращаем false (или true, если хотите пререндерить сайт)
  if (!isClient.value) return false 
  return password.value === secret_key
})

onMounted(() => {
  isClient.value = true // Теперь мы в браузере
  
  const storedLanguage = localStorage.getItem('nuxt-lang')
  if (storedLanguage && storedLanguage !== 'en-US') {
    locale.value = storedLanguage
  }
  
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