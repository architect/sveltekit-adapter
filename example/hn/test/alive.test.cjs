const test = require('tape')
const sandbox = require('@architect/sandbox')
const tiny = require('tiny-json-http')



test("sandbox request", async (t) => {
  t.plan(2)
  let url = 'http://localhost:3333'
  let result


  try {
    let sandboxOut = await sandbox.start()
    t.equal(sandboxOut,'Sandbox successfully started')
  } catch (e) {
    console.log(e)
    t.fail('sandbox failed to start')
  }
  try {
    let result = await tiny.get({url})
    t.ok(result.body,'sandbox request received')
  } catch (e) {
    console.log(e)
    t.fail('response failed')
  }
  try {
  await sandbox.end()
  } catch (e) {
    console.log(e)
    t.fail('response failed')
  }
})


