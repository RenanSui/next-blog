import { ReasonPhrases, StatusCodes } from 'http-status-codes'
type StrToNum<Str> = Str extends `${infer Num extends number}` ? Num : Str

export type Post = {
  _id: string
  title: string
  body: string
  createdAt: Date
  updateAt: Date
}

export type StatusCode = StrToNum<`${StatusCodes}`>

export type ReasonPhrase = `${ReasonPhrases}`

export type AuthResponse = {
  data?: { accessToken: string }
  message: ReasonPhrase
  status: StatusCode
}
