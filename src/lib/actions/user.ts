import { HTTPResponse, User } from '@/types'
import { cookies } from 'next/headers'

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

    const { data: user }: HTTPResponse<User> = await response.json()

    return user
  } catch (error) {
    const user = null
    return user
  }
}
