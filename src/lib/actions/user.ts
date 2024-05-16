'use server'

import { HTTPResponse, User } from '@/types'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { UserStatusCode } from '../handle-user-error'
import { UpdateUserSchema } from '../validations/user'

export const getUser = async () => {
  try {
    const cookieStore = cookies()

    const accessToken = cookieStore.get('accessToken')?.value ?? ''

    const response = await fetch(`${process.env.SERVER_URL}/me`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
    })

    const { data: user }: HTTPResponse<User, UserStatusCode> =
      await response.json()

    return user
  } catch (error) {
    const user = null
    return user
  }
}

export const updateProfile = async (formData: UpdateUserSchema) => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value ?? ''

  const response = await fetch(`${process.env.SERVER_URL}/user/update`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...formData }),
  })

  const { status, message }: HTTPResponse<User, UserStatusCode> =
    await response.json()

  revalidatePath('/')

  return { message, status }
}
