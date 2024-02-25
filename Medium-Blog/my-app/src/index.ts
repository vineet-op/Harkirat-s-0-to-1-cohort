import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,decode,verify, jwt } from 'hono/jwt'

// Create the main Hono app
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	}
}>();


app.post('/api/v1/signup', async (c) => {

	const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())

	const body = await c.req.json();

	await prisma.user.create({
		data:{
			email:body.email,
			password:body.password
		}
	})

	//@ts-ignore
	const token = await jwt.sign({id:user.id}, "SECRET")

	return c.json({
		jwt:token
	})
})

app.post('/api/v1/signin', (c) => {
	return c.text('signin route')
})

app.get('/api/v1/blog/:id', (c) => {
	const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})

app.post('/api/v1/blog', (c) => {

	return c.text('signin route')
})

app.put('/api/v1/blog', (c) => {
	return c.text('signin route')
})

export default app;
