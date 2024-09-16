import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono()

const schema = z.object({
  id: z.number(),
  title: z.string()
})

const routes = app
  .get('/posts/:postId/comments/:commentId', (c) => {
    return c.json({
      id: 123,
      title: 'foo'
    })
  })
  .post('/posts', zValidator('json', schema), (c) => {
    const data = c.req.valid('json')
    return c.json({
      ok: true,
      id: data.id,
      title: data.title
    })
  })
  .delete('/posts', (c) => {
    return c.json({
      ok: true
    })
  })

export default routes
