export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:error', (error, instance, info) => {
    console.error('===== VUE ERROR =====')
    console.error('Error:', error)
    console.error('Stack:', error?.stack)
    console.error('Info:', info)
  })

  nuxtApp.hook('app:error', (error) => {
    console.error('===== APP ERROR =====')
    console.error(error)
    console.error(error?.stack)
  })
})