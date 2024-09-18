import routes from './server'
import { hc } from 'hono/client'

type Routes = typeof routes

const client = hc<Routes>('http://localhost:3000')

export type Client = typeof client

export const hcWithType = (...args: Parameters<typeof hc<Routes>>): Client => hc<Routes>(...args)
