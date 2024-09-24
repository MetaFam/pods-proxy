import { parse } from 'rss-to-json'

export async function GET(request: Request, { params }: { params: { pod: string } }) {
  const { pod } = params
  const rss = await parse(`https://${pod}.substack.com/feed`)

  return Response.json(rss, {
    headers: {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET',
      'access-control-allow-headers': 'Content-Type',
    }
  })
}