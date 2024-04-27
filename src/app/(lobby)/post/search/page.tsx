import { getPostBySearch } from '@/lib/actions/post'
import Link from 'next/link'

export default async function Page({
  searchParams: { searchInput },
}: {
  searchParams: { searchInput: string }
}) {
  const { posts, error } = await getPostBySearch(searchInput)

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      {posts ? (
        <section className="space-y-8 py-16">
          <header>
            <h1 className="text-3xl font-medium pb-2">Search results</h1>
            {posts && posts.length !== 0 ? (
              <p>
                {posts.length} results for {searchInput}
              </p>
            ) : (
              <p className="text-xl">No Results for {searchInput}...</p>
            )}
          </header>
          <main>
            <ul className="group/list space-y-6">
              {posts
                ? posts.map((post, index) => {
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
                  })
                : null}
            </ul>
          </main>
          <footer>
            <Link href="/" className="hover:underline">
              Go back
            </Link>
          </footer>
        </section>
      ) : error ? (
        <section className="space-y-8 py-16">
          <header>
            <h1 className="text-3xl font-medium capitalize">
              An error has ocurred.
            </h1>
          </header>
          <main>
            <p className="text-lg tracking-wide font-light">
              {error.message}...
            </p>
          </main>
          <footer>
            <Link href="/" className="hover:underline">
              Go back
            </Link>
          </footer>
        </section>
      ) : null}
    </div>
  )
}
