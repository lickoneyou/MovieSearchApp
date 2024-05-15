export async function POST(req) {
  const reqData = await req.json()
  const width = reqData.width
  const imgSrc = reqData.imgSrc
  const url = `https://image.tmdb.org/t/p/w${width}/${imgSrc}`
  return Response.json({url: url})
}