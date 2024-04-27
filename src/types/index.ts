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

export type HTTPResponse = {
  message: ReasonPhrase
  status: StatusCode
}

export type AuthResponse = HTTPResponse & {
  data?: { accessToken: string }
}

export type PostResponse = HTTPResponse & {
  data: Post
}
