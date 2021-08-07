const test = require('tape')
const sandbox = require('@architect/sandbox')
const tiny = require('tiny-json-http')

test('sandbox request', async (t) => {
  t.plan(3)
  let ssrUrl = 'http://localhost:3333/top/1'
  let staticUrl = 'http://localhost:3333/about'

  try {
    let sandboxOut = await sandbox.start()
    t.equal(sandboxOut, 'Sandbox successfully started', 'Sandbox Started')
  } catch (e) {
    console.log(e)
    t.fail('sandbox failed to start')
  }
  try {
    let result = await tiny.get({ url:ssrUrl })
    t.ok(result.body, 'ssr request received')
  } catch (e) {
    console.log(e)
    t.fail('ssr response failed')
  }
  try {
    let result = await tiny.get({ url:staticUrl })
    t.ok(result.body, 'static request received')
  } catch (e) {
    console.log(e)
    t.fail('static response failed')
  }
  try {
    await sandbox.end()
  } catch (e) {
    console.log(e)
    t.fail('response failed')
  }
})
