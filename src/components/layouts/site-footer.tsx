
export const SiteFooter = () => {
  return (
    <footer className="w-full border-t border-neutral-950/20 bg-transparent px-4 py-4 md:px-8">
  <div className="grid grid-cols-3 text-neutral-700 max-w-screen-lg mx-auto w-full">
    <div>
      <p className="flex-1 text-left text-sm leading-loose">
        Built by{' '}
        <a href="<%= locals.links.githubAccount %>" target="_blank" rel="noreferrer"
          className="font-semibold transition-colors hover:underline">
          Renansui
          <span className="sr-only">github</span>
        </a>
      </p>
      <p className="flex-1 text-left text-sm leading-loose">
        Designed in{' '}
        <a href="https://www.figma.com" target="_blank" rel="noreferrer noopener" className="font-medium hover:underline"
          aria-label="Figma (opens in a new tab)">
          Figma
        </a>
      </p>
    </div>

    <div className="">
      <p className="flex-1 text-left text-sm leading-loose">
        Coded in{' '}
        <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer noopener"
          className="font-medium hover:underline" aria-label="Visual Studio Code (opens in a new tab)">
          Visual Studio Code{' '}
        </a>
        by yours truly
      </p>
      <p className="flex-1 text-left text-sm leading-loose">
        Built with{' '}
        <a href="https://nodejs.org/en" target="_blank" rel="noreferrer noopener" className="font-medium hover:underline"
          aria-label="NodeJS (opens in a new tab)">
          NodeJS,{' '}
        </a>
        <a href="https://expressjs.com" target="_blank" rel="noreferrer noopener" className="font-medium hover:underline"
          aria-label="Express (opens in a new tab)">
          Express{' '}
        </a>
        and{' '}
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener" className="font-medium hover:underline"
          aria-label="Tailwind CSS (opens in a new tab)">
          Tailwind CSS
        </a>
      </p>
    </div>

    <div>
      <p className="flex-1 text-left text-sm leading-loose">
        Deployed with{' '}
        <a href="/???" target="_blank" rel="noreferrer noopener" className="font-medium hover:underline"
          aria-label="??? (opens in a new tab)">
          ???
        </a>
      </p>

      <p className="flex-1 text-left text-sm leading-loose">
        Database provided by{' '}
        <a href="/https://www.mongodb.com" target="_blank" rel="noreferrer noopener" className="font-medium hover:underline"
          aria-label="MongoDB (opens in a new tab)">
          MongoDB
        </a>
      </p>
    </div>
  </div>
</footer>
  )
}
