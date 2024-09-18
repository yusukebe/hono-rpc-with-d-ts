import { hcWithType } from '../types/client'

const client = hcWithType('http://localhost:3000')

const res = await client.posts[':postId'].comments[':commentId'].$get({
  param: {
    postId: '123',
    commentId: '123'
  }
})

const data = await res.json()
