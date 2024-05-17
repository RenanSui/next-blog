import { StatusCodes } from 'http-status-codes'

export const HTPPErrorMessages = {
  200: 'The request has succeeded.',
  400: 'The server could not understand the request due to invalid syntax.',
  401: 'the user must authenticate to use the services.',
  403: 'The user does not have access rights to the content.',
}

export type PostStatusCode = keyof typeof HTPPErrorMessages

export function UserErrorHandler(status?: PostStatusCode) {
  if (!status) return

  if (status === StatusCodes.OK) return

  const message = HTPPErrorMessages[status]
  throw new Error(message)
}
