import { getPostById } from '@/lib/actions/post'
import Link from 'next/link'

export default async function Page({
  params: { id },
  searchParams: { index },
}: {
  params: { id: string }
  searchParams: { index: string }
}) {
  const { error, post } = await getPostById(id)

  return (
    <div className="max-w-screen-lg mx-auto">
      {post ? (
        <section className="space-y-8 py-16">
          <header>
            <h1 className="text-3xl font-medium capitalize">{post.title}</h1>
          </header>
          <main>
            <div className="grid grid-cols-4 md:space-x-2 space-y-8 md:space-y-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://source.unsplash.com/random/${1280 + Number(index)}x${720 + Number(index)}`}
                alt="dummy image"
                className="shadow-xl bg-neutral-950/30 rounded-md col-span-4 md:col-span-2"
              />
              <p className="text-lg tracking-wide font-light col-span-4 md:col-span-2">
                {post.body}
              </p>
            </div>
          </main>
          <footer>
            <Link href={`/#post-${index}`} className="hover:underline">
              Go back
            </Link>
          </footer>
        </section>
      ) : null}

      {error ? (
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
            <Link href={`/#post-${index}`} className="hover:underline">
              Go back
            </Link>
          </footer>
        </section>
      ) : null}
    </div>
  )
}
