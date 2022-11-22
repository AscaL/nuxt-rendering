export default defineEventHandler(async (event) => {
  return { time: Date.now() }
})
