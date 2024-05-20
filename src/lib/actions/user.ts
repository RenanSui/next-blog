'use server'

import { HTTPResponse, User } from '@/types'
import console from 'console'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { UserStatusCode } from '../handle-user-error'
import { UpdateUserSchema } from '../validations/user'

export const getMe = async () => {
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

export const getUser = async (id: string) => {
  try {
    const cookieStore = cookies()

    const accessToken = cookieStore.get('accessToken')?.value ?? ''

    const response = await fetch(`${process.env.SERVER_URL}/user`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ id }),
    })

    const {
      data: user,
      status,
      message,
    }: HTTPResponse<User, UserStatusCode> = await response.json()

    console.log({ status, message })

    return user
  } catch (error) {
    console.log({ error })
    const user = null
    return user
  }
}

export const updateProfile = async (
  formData: Omit<UpdateUserSchema, 'username'>,
) => {
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

export const updateUsername = async ({
  username,
}: Pick<UpdateUserSchema, 'username'>) => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value ?? ''

  const response = await fetch(
    `${process.env.SERVER_URL}/user/update/username`,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ username }),
    },
  )

  const { status, message }: HTTPResponse<User, UserStatusCode> =
    await response.json()

  revalidatePath('/')

  return { message, status }
}
