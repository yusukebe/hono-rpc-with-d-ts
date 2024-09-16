import app from '../types/server'
import { hc } from 'hono/client'

const client = hc<typeof app>('http://localhost:3000')

const res = await client.index.$get()
const data = await res.json()
console.log(data)
