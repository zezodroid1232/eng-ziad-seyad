import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div id="root"></div>,
    <script src="/static/app.js"></script>
  )
})

export default app
