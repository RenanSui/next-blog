import { Icons } from '@/components/icons'
import { ReasonPhrases } from 'http-status-codes'

// type StrToNum<Str> = Str extends `${infer Num extends number}` ? Num : Str
// export type StatusCode = StrToNum<`${StatusCodes}`>

export type SidebarNavItem = {
  title: string
  href: string
  icon?: keyof typeof Icons
  disabled: boolean
}

export type Navbar = {
  items: SidebarNavItem[]
}

export type Post = {
  _id: string
  userId: string
  body: string
  createdAt: Date
  updateAt: Date
}

export type User = {
  _id: string
  name: string
  username: string
  email: string
  password: string
  imageUrl: string
  isAdmin: boolean
  createdAt: string
  updatedAt: string
}

export type ReasonPhrase = `${ReasonPhrases}`

export type HTTPResponse<T = void, B = void> = {
  data: T | null
  message: ReasonPhrase
  status: B
}

export type Auth = { accessToken: string }
