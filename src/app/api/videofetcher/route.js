export async function POST(req) {
  const reqData = await req.json()
  const id = reqData.id
  const APIKey = '96ff6ab3252527b9a8b7aaa21e087ff4'
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKey}`
  const res = await fetch(url)
  const data = await res.json()
  return Response.json(data)
}
