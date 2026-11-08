<script setup lang="ts">

const route = useRoute()


import {
  ref,
  computed,
  nextTick,
  onMounted,
  onBeforeUnmount,
  watch,
} from 'vue'

//import { posts } from "../components/content_for_universe_of_courage/posts"

interface Post {
  id: string
  text: string
}


const partLoaders = import.meta.glob<{
  posts?: Post[]
  default?: Post[]
}>(
  '../components/content_for_universe_of_courage/*_part.ts'
)

const partFiles: Record<number, string> = {
  1: '../components/content_for_universe_of_courage/1_st_part.ts',
  2: '../components/content_for_universe_of_courage/2_nd_part.ts',
  3: '../components/content_for_universe_of_courage/3_rd_part.ts',
  4: '../components/content_for_universe_of_courage/4_th_part.ts',
  5: '../components/content_for_universe_of_courage/5_th_part.ts',
  6: '../components/content_for_universe_of_courage/6_th_part.ts',
  7: '../components/content_for_universe_of_courage/7_th_part.ts',
  8: '../components/content_for_universe_of_courage/8_th_part.ts',
}

const postPartById: Record<string, number> = {
  men_chapter_1_post_1: 1,
  men_chapter_2_post_1: 1,
  men_chapter_2_post_2: 1,

  men_chapter_3_post_1: 2,
}



const loadedParts = useState<Record<string, Post[]>>(
  'universe-loaded-parts',
  () => ({})
)

const nextPart = useState<number>(
  'universe-next-part',
  () => 1
)

const posts = computed<Post[]>(() =>
  Object.entries(loadedParts.value)
    .sort(([a], [b]) => Number(a) - Number(b))
    .flatMap(([, items]) => items)
)

const loading = ref(false)
const error = ref('')

const sentinel = ref<HTMLElement | null>(null)

const loadingParts = new Map<number, Promise<void>>()

let observer: IntersectionObserver | null = null

const hasMore = computed(() => nextPart.value <= 8)



async function loadPart(part: number): Promise<boolean> {
  if (loadedParts.value[String(part)]) return true

const existingRequest = loadingParts.get(part)

  if (existingRequest) {
    await existingRequest
    return loadedParts.has(part)
  }

  const path = partFiles[part]

  if (!path) return false

  const loader = partLoaders[path]

  if (!loader) {
    error.value = `Не найден файл части ${part}`
    console.error(`Missing module: ${path}`)
    return false
  }

  const request = (async () => {
    const module = await loader()

const partPosts = module.posts ?? module.default

    if (!partPosts) {
      throw new Error(`В файле части ${part} не найден массив posts`)
    }

    loadedParts.value[String(part)] = partPosts

  })()

  loadingParts.set(part, request)

  try {
    await request
    error.value = ''
    return true
  } catch (err) {
  console.error('Ошибка загрузки части:', part, err)

  error.value = err instanceof Error
    ? err.message
    : String(err)

  return false
} finally {
    loadingParts.delete(part)
  }
}


async function loadNextPart() {
  if (loading.value || !hasMore.value) return

  loading.value = true

  const part = nextPart.value

  try {
    const success = await loadPart(part)

    if (success) {
      nextPart.value = part + 1
    }
  } finally {
    loading.value = false
  }
}

async function goToPost(id: string) {
  let part = postPartById[id]

  // Если номер части неизвестен — ищем пост во всех частях
  if (!part) {
    for (let i = 1; i <= 8; i++) {
      const success = await loadPart(i)

      if (!success) continue

      const found = posts.value.some(post => post.id === id)

      if (found) {
        part = i
        break
      }
    }
  } else {
    // Если часть известна, загружаем только её
    const success = await loadPart(part)
    if (!success) return
  }

  if (!part) {
    console.error(`Пост не найден: ${id}`)
    error.value = `Пост не найден: ${id}`
    return
  }

  nextPart.value = Math.max(nextPart.value, part + 1)

  await nextTick()

  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

async function handleHash(hash: string) {
  if (!hash) {
    if (posts.value.length === 0) {
      await loadNextPart()
    }
    return
  }

  const id = decodeURIComponent(hash.slice(1))

  await goToPost(id)
}

onMounted(async () => {
  // Если открыли прямую ссылку из меню,
  // загружаем нужную часть. Иначе первую.
  if (route.hash) {
    await handleHash(route.hash)
  } else {
    await loadNextPart()
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        loadNextPart()
      }
    },
    {
      rootMargin: '800px',
      threshold: 0,
    },
  )

  if (sentinel.value) {
    observer.observe(sentinel.value)
  }
})

// Реагируем на переходы между hash без перезагрузки страницы.
watch(
  () => route.hash,
  (hash) => {
    if (import.meta.client && hash) {
      handleHash(hash)
    }
  },
)

onBeforeUnmount(() => {
  observer?.disconnect()
})
















import { useI18n } from 'vue-i18n'
const { t } = useI18n();

useHead({
  title: computed(() => t("pages.index.meta.title")),
  meta: [{ name: "description", content: t("pages.index.meta.description") }],
});
useSeoMeta({
  title: computed(() => t("pages.index.meta.title")),
  description: computed(() => t("pages.index.meta.description")),
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
    <article  
        v-for="(block, i) in posts" :key="block.id" :id="block?.id"
        class="bg-[#f4f4f5] dark:bg-[#212e3b] rounded-lg px-4 py-3 whitespace-pre-wrap"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-slate-900 dark:text-white">{{block.text}}</h2>
      </div>
    </article>
    <div ref="sentinel" class="h-10"/>
    <div v-if="loading" class="text-center">
      Загружается...
    </div>
    <div v-if="error" class="text-center">
      <p>{{ error }}</p>
      <button @click="loadNextPart">
        Повторить
      </button>
    </div>

    <div v-if="!hasMore && !loading" class="text-center">
      Все посты загружены.
    </div>
  </div>
</template>



