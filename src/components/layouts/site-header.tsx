import Link from 'next/link'
import { PostsCombobox } from '../posts-combobox'

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 flex border-b bg-white bg-[url(/images/img-noise-361x370.png)]">
      {/* <div className="mx-auto w-full max-w-screen-lg flex items-center justify-between container"> */}
      <div className="container flex h-16 items-center">
        <Link href="/" className="text-3xl font-medium">
          Blog
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <PostsCombobox />
            <div className="h-8 w-8 rounded-full bg-neutral-400" />
          </nav>
        </div>
      </div>
    </header>
  )
}
// export const SiteHeader = () => {
//   return (
//     <header className="sticky top-0 z-50 flex border-b border-neutral-950/20 bg-white p-4 bg-[url(/images/img-noise-361x370.png)]">
//       <div className="mx-auto w-full max-w-screen-lg flex items-center justify-between">
//         <a href="/" className="text-3xl font-medium">
//           Blog
//         </a>

//         <nav>
//           <h1 className="sr-only">Blog Navigation</h1>
//           <ul className="flex gap-1">
//             {siteConfig.mainNav.map((nav, index) => (
//               <li key={`nav-${index}`}>
//                 <a href={nav.href} className="px-4 py-1 hover:underline">
//                   {nav.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div>
//           <Search />
//         </div>
//       </div>
//     </header>
//   )
// }
