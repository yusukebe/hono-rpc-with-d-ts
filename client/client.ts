import { client as clientType } from '../types/client-types/client'
import { hc } from 'hono/client'

const client = hc('http://localhost:3000') as unknown as typeof clientType
