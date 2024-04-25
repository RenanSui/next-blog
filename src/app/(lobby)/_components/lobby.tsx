import { getPosts } from '@/lib/actions/post'
import Link from 'next/link'

type LobbyProps = {
  postsPromise: ReturnType<typeof getPosts>
}

export async function Lobby({ postsPromise }: LobbyProps) {
  const posts = (await postsPromise).slice(0, 10)

  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-8 ">
      <section id="about" className="flex flex-col gap-4 py-4">
        <h2 className="font-bold text-5xl text-center">
          Hey, welcome! The name&apos;s Sui.
        </h2>
        <p
          id="something"
          className="text-center text-xl tracking-wide font-light"
        ></p>
        <p className="text-center text-xl tracking-wide font-light">
          Web developer, gamer and music enjoyer in the free time.
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-image.webp"
          alt="person looking out through window"
          className="w-full mx-auto rounded-lg shadow-2xl mt-12"
        />
      </section>

      <section id="posts" className="py-12 flex flex-col gap-8 mt-8">
        <header>
          <h3 className="text-5xl font-light">Latests Posts</h3>
        </header>

        <main>
          <ul className="group/list space-y-6">
            {posts.map((post, index) => {
              const createdAt = new Date(post.createdAt).toDateString()

              return (
                <li
                  className="grid grid-cols-12 group rounded-md py-2 justify-between min-h-[200px]"
                  key={`post-${index}`}
                  id={`post-${index}`}
                >
                  <div className="flex flex-col col-span-7">
                    <Link
                      href={`/post/${post._id}?index=${index}`}
                      className="capitalize font-medium text-2xl line-clamp-2"
                    >
                      {post.title}
                    </Link>
                    <Link
                      href={`/post/${post._id}?index=${index}`}
                      className="line-clamp-2 mt-1"
                    >
                      {post.body}
                    </Link>
                    <span className="text-neutral-950 text-sm font-light mt-auto">
                      {createdAt}
                    </span>
                  </div>

                  <div className="col-span-1"></div>

                  <Link
                    href={`/post/${post._id}?index=${index}`}
                    className="shadow-xl col-span-4 bg-neutral-950/30 rounded-md bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url('https://source.unsplash.com/random/${1280 + index}x${720 + index}')`,
                    }}
                  >
                    <span className="sr-only">Dummy Image</span>
                  </Link>

                  {index !== posts.length - 1 ? (
                    <div className="w-full col-span-12 border-b border-neutral-950/20"></div>
                  ) : (
                    ''
                  )}
                </li>
              )
            })}
          </ul>
        </main>

        <footer>
          {/* <% if (locals.hasNextPage) { %>
          <a href="/?page=<%= nextPage %>" className="text-sm hover:underline">&lt; View Older Posts</a>
          <% } %> */}
        </footer>
      </section>
    </div>
  )
}
