import { z } from 'zod'
import * as zfd from 'zod-form-data'

export const createPostSchema = zfd.formData({
  body: zfd.text(),
})

export type CreatePostSchema = z.infer<typeof createPostSchema>
