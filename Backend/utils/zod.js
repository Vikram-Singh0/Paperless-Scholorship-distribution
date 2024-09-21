import zod from "zod"

export const signupBody = zod.object({
  username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string().min(6),
  role: zod.string(),
})

export const loginBody = zod.object({
  username: zod.string().email(),
	password: zod.string().min(6)
})

export const updateBody = zod.object({
	firstName : zod.string().optional(),
	lastName : zod.string().optional(),
	password : zod.string().optional(),
})