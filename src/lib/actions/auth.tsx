'use server'

import { AuthResponse } from '@/types'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { authSchema } from '../validations/auth'

type Inputs = z.infer<typeof authSchema>

export const signIn = async (formData: Inputs) => {
  const parsed = authSchema.safeParse(formData)

  if (!parsed.success) {
    return {
      error: {
        message: parsed.error.errors.map((error) => error.message).join('. '),
      },
    }
  }

  const cookieStore = cookies()

  const accessToken = cookieStore.get('accessToken')?.value ?? ''
  const response = await fetch('http://localhost:8000/auth/sign-in', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...parsed.data }),
  })

  const { data, message, status }: AuthResponse = await response.json()

  if (data?.accessToken) {
    cookieStore.set('accessToken', data.accessToken, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24,
    })
  }

  return { message, status }
}
