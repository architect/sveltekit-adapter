'use strict'

import url from 'url'
import { init, render } from '../output/server/app.js' // eslint-disable-line import/no-unresolved
import { isContentTypeTextual } from '@sveltejs/kit/adapter-utils' // eslint-disable-line import/no-unresolved
import arc from '@architect/functions'

init()

const checkStatic = arc.http.proxy({ passthru: true })

export const handler = arc.http.async(checkStatic, svelteHandler)

export async function svelteHandler(event) {
  const { host, rawPath: path, httpMethod, rawQueryString, headers, body, isBase64Encoded } = event

  const query = new url.URLSearchParams(rawQueryString)
  const type = headers['content-type']
  const rawBody =
    type && isContentTypeTextual(type)
      ? isBase64Encoded
        ? Buffer.from(body, 'base64').toString()
        : body
      : new TextEncoder('base64').encode(body)

  const rendered = await render({
    host,
    method: httpMethod,
    headers,
    path,
    rawBody,
    query
  })

  if (rendered) {
    return {
      isBase64Encoded: false,
      statusCode: rendered.status,
      headers: rendered.headers,
      body: rendered.body
    }
  }

  return {
    statusCode: 404,
    body: 'Not Found'
  }
}
