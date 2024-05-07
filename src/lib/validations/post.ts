import { z } from 'zod'
import * as zfd from 'zod-form-data'

export const createPostSchema = zfd.formData({
  title: zfd.text(z.string().min(3).max(100)),
  body: zfd.text(),
})
