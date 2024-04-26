import { siteConfig } from '@/config/site'
import SignInForm from '../_components/signin-form'

export default function Page() {
  return (
    <div className="mx-auto flex gap-8 relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 w-screen md:relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 h-full w-full object-cover text-transparent opacity-50"
          src={siteConfig.unsplash.auth.imageUrl}
          width="1280"
          height="1080"
          alt="photo of city buildings during
      daytime"
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
              href={siteConfig.unsplash.auth.authorUrl}
              target="_blank"
            >
              {siteConfig.unsplash.auth.author}{' '}
            </a>
            on{' '}
            <a
              className="hover:underline"
              href={siteConfig.unsplash.auth.imagePageUrl}
              target="_blank"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>

      <div className="relative z-10 flex h-screen w-screen items-center justify-center p-8">
        <div className="w-full max-w-[480px] rounded-xl border p-6 shadow bg-white">
          <div className="flex flex-col space-y-1 pb-6">
            <h1 className="text-2xl font-semibold tracking-tight text-black">
              Sign in
            </h1>
            <p className="text-sm text-neutral-800">
              Choose your preferred sign in method
            </p>
          </div>

          {/* <%- include('./partials/oauth-signin.ejs') %> */}

          <div className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <SignInForm />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 py-2">
            <div className="text-sm text-muted-foreground">
              <span className="mr-1 hidden sm:inline-block">
                Don&apos;t have an account?
              </span>
              <a
                aria-label="Sign up"
                href="/auth/sign-up"
                className="text-primary underline-offset-4 transition-colors hover:underline"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
