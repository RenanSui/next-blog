import { z } from 'zod'
import * as zfd from 'zod-form-data'

export const searchSchema = zfd.formData({
  searchInput: zfd.text(z.string().min(1).max(50)),
})

export type SearchSchema = z.infer<typeof searchSchema>
