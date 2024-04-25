import { siteConfig } from '@/config/site'

export default async function Page() {
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
        <div className="w-full max-w-[480px] rounded-xl border p-6 shadow">
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

            <form
              action="/auth/sign-in"
              role="sign-in"
              method="POST"
              className="grid gap-4"
            >
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="reallycoolguy@gmail.com"
                />
                {/* <% if (locals.emailError) { %>
                <p className="text-[0.8rem] font-medium text-red-600">
                  <%= locals.emailError %>
                </p>
                <% } %> */}
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                />
                {/* <% if (locals.emailError) { %>
                <p className="text-[0.8rem] font-medium text-red-600">
                  <%= locals.passwordError %>
                </p>
                <% } %> */}
              </div>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border text-white hover:bg-neutral-800 shadow-sm bg-neutral-950 w-full py-2">
                Sign In
              </button>
            </form>
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
