export async function GET(req, context) {
  const { params } = context
  const APIKey = '96ff6ab3252527b9a8b7aaa21e087ff4'
  const url = `https://api.themoviedb.org/3/movie/${params.id}`
  const res = await fetch(url + '?api_key=' + APIKey)
  const data = await res.json()
  return Response.json(data)
}
