import { siteConfig } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {
  return (
    <div className="mx-auto flex  gap-8 relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 w-screen md:relative">
        <Image
          className="absolute inset-0 h-full w-full object-cover text-transparent opacity-50"
          src={siteConfig.unsplash.auth.signup.imageUrl}
          width="1280"
          height="1080"
          alt="photo of city buildings during daytime"
        />

        <div className="relative z-10 flex h-full flex-col justify-between p-4 px-8">
          <a
            className="text-2xl font-semibold tracking-tight text-black"
            href="/"
          >
            Blog
          </a>
          <p className="text-black">
            Photo by{' '}
            <a
              className="hover:underline"
              href={siteConfig.unsplash.auth.signup.authorUrl}
              target="_blank"
            >
              {siteConfig.unsplash.auth.signup.author}{' '}
            </a>
            on{' '}
            <a
              className="hover:underline"
              href={siteConfig.unsplash.auth.signup.imagePageUrl}
              target="_blank"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>

      <div className="relative z-10 flex h-screen w-screen items-center justify-center p-8">
        <div className="w-full max-w-xs rounded-xl bg-transparent p-6 shadow xl:mx-8">
          <div className="flex flex-col items-center space-y-1 pb-6">
            <h1 className="text-2xl font-semibold tracking-tight text-black ">
              Sign out
            </h1>
            <p className="w-[150px] text-center text-neutral-800 ">
              Are you sure you want to sign out?
            </p>
          </div>

          <div className="flex justify-center space-x-2">
            {/* <Signout className="w-full">Log out</Signout> */}
            <Link
              className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md px-3 text-xs border text-black bg-transparent hover:bg-neutral-100 shadow-sm w-full"
              href="/"
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
