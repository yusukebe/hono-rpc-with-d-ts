import app from '../server/server'
import { hc } from 'hono/client'

export const client = hc<typeof app>('http://localhost:3000')
