import { HTPPErrorMessages } from '@/lib/handle-auth-error'
import { ReasonPhrases } from 'http-status-codes'

// type StrToNum<Str> = Str extends `${infer Num extends number}` ? Num : Str
// export type StatusCode = StrToNum<`${StatusCodes}`>

export type Post = {
  _id: string
  title: string
  body: string
  createdAt: Date
  updateAt: Date
}

export type User = {
  email: string
  password: string
  isAdmin: boolean
}

export type StatusCode = keyof typeof HTPPErrorMessages

export type ReasonPhrase = `${ReasonPhrases}`

export type HTTPResponse<T = void> = {
  data: T | null
  message: ReasonPhrase
  status: StatusCode
}

export type Auth = { accessToken: string }
