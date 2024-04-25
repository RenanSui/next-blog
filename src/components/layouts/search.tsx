export function Search() {
  // const action = (form) => {
  //   'use server'
  //   console.log(form)
  // }

  return (
    <div>
      <form
        action="/post/search"
        role="search"
        className="flex gap-1 items-center justify-center"
      >
        {/* <form
        action={action}
        role="search"
        method="POST"
        className="flex gap-1 items-center justify-center"
      > */}
        <div className="flex gap-1 items-center justify-center">
          <input
            type="text"
            name="searchInput"
            aria-label="Search"
            id="searchInput"
            placeholder="Search"
            className="bg-transparent max-w-[72px] px-2 text-black placeholder:text-black focus:bg-white"
          />
          <label htmlFor="searchInput">
            <span className="sr-only">Search</span>
          </label>
        </div>
        <button type="submit">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-neutral-950"
              d="M7.79167 13.4583C10.9213 13.4583 13.4583 10.9213 13.4583 7.79167C13.4583 4.66205 10.9213 2.125 7.79167 2.125C4.66205 2.125 2.125 4.66205 2.125 7.79167C2.125 10.9213 4.66205 13.4583 7.79167 13.4583Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="stroke-neutral-950"
              d="M14.875 14.875L11.7938 11.7938"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  )
}
