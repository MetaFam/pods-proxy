import { parse } from 'rss-to-json'

export async function GET(request: Request, {params}) {
  const { pod } = params
  const rss = await parse(`https://pods.media/api/rss/feed/channel/${pod}`)

  return Response.json(rss, {
    headers: {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET',
      'access-control-allow-headers': 'Content-Type',
    }
  })
}