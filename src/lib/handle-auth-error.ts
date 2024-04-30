import { StatusCode } from '@/types'
import { StatusCodes } from 'http-status-codes'

export const HTPPErrorMessages = {
  200: 'The request has succeeded.',
  400: 'The server could not understand the request.',
  404: 'User not found. Please create an account.',
  409: 'User already exist.',
}

export function AuthErrorHandler(status?: StatusCode) {
  if (!status) return

  if (status === StatusCodes.OK) return

  const message = HTPPErrorMessages[status]
  throw new Error(message)
}