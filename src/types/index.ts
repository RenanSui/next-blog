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

export type HTTPResponse<T> = {
  data: T | null
  message: ReasonPhrase
  status: StatusCode
}

export type Auth = { accessToken: string }
