'use server'

import { Auth, HTTPResponse } from '@/types'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { AuthStatusCode } from '../handle-auth-error'
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
  const response = await fetch(`${process.env.SERVER_URL}/auth/sign-in`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...parsed.data }),
  })

  const { data, message, status }: HTTPResponse<Auth, AuthStatusCode> =
    await response.json()

  if (data?.accessToken) {
    cookieStore.set('accessToken', data.accessToken, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24,
    })
  }

  return { message, status }
}

export const signUp = async (formData: Inputs) => {
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
  const response = await fetch(`${process.env.SERVER_URL}/auth/sign-up`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...parsed.data }),
  })

  const { data, message, status }: HTTPResponse<Auth, AuthStatusCode> =
    await response.json()

  if (data?.accessToken) {
    cookieStore.set('accessToken', data.accessToken, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24,
    })
  }

  return { message, status }
}

export const signOut = async () => {
  const cookieStore = cookies()
  cookieStore.delete('accessToken')
  const accessToken = cookieStore.get('accessToken')?.value

  if (accessToken) {
    return { status: 400 } as { status: AuthStatusCode }
  }
  return { status: 200 } as { status: AuthStatusCode }
}
