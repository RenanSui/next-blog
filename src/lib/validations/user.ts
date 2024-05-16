import * as z from 'zod'
import * as zfd from 'zod-form-data'

export const updateUserSchema = zfd.formData({
  name: zfd.text(z.string().min(2)).transform((value) => value.trim()),
  username: zfd
    .text(z.string().min(2))
    .transform((value) => value.replace(/\s+/g, '').trim()),
})

export type UpdateUserSchema = z.infer<typeof updateUserSchema>
