export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-8 ">
  <section id="about" className="flex flex-col gap-4 py-4">
    <h2 className="font-bold text-5xl text-center">Hey, welcome! The name&apos;s Sui.</h2>
    <p id="something" className="text-center text-xl tracking-wide font-light">
    </p>
    <p className="text-center text-xl tracking-wide font-light">Web developer, gamer and music enjoyer in the free time.</p>


      <img src="/images/hero-image.webp" alt="person looking out through window"
        className="w-full mx-auto rounded-lg shadow-2xl mt-12"/>

  </section>

  <section id="posts" className="py-12 flex flex-col gap-8 mt-8">
    <header>
      <h3 className="text-5xl font-light">Latests Posts</h3>
    </header>

    <main>
      <ul className="group/list flex flex-col gap-6">
        {/* <% locals.posts.map((post, index)=> { %>
          <li className="grid grid-cols-12 group rounded-md py-2 justify-between min-h-[200px]">
            <div className="flex flex-col col-span-7">
              <a href="/post/<%= post._id %>" className="capitalize font-medium text-2xl line-clamp-2">
                <%= post.title %>
              </a>
              <a href="/post/<%= post._id %>" className="line-clamp-2 mt-1">
                <%= post.body %>
              </a>
              <span className="text-neutral-950 text-sm font-light mt-auto">
                <%= post.createdAt.toDateString() %>
              </span>
            </div>

            <div className="col-span-1"></div>

            <a href="/post/<%= post._id %>" className="col-span-4 bg-neutral-950/30 rounded-md bg-cover bg-no-repeat"
              style="background-image: url('https://source.unsplash.com/random/<%= 1280+index %>x<%= 720+index %>');">
              <span className="sr-only">Dummy Image</span>
            </a>
          </li>

          <% if (index !==locals.posts.length - 1) { %>
            <div className="w-full border-b border-neutral-950/20"></div>
            <% } %>
              <% }) %> */}
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
