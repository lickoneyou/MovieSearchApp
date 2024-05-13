export async function GET(req) {
  const APIKey = '96ff6ab3252527b9a8b7aaa21e087ff4'
  const url = `https://api.themoviedb.org/3/genre/movie/list`
  const paramsURL = new URL(req.url)
  const searchParams = new URLSearchParams(paramsURL.search)
  searchParams.append('api_key', APIKey)
  const res = await fetch(url + '?' + searchParams)
  const data = await res.json()
  return Response.json(data)
}
