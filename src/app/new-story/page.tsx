import { LoadingButton } from '@/components/loading-button'
import { Shell } from '@/components/shells/shell'
import { Input } from '@/components/ui/input'
import { createPost } from '@/lib/actions/post'
import { getUser } from '@/lib/actions/user'
import { createPostSchema } from '@/lib/validations/post'
import { redirect } from 'next/navigation'

export default async function NewStoryPage() {
  const user = await getUser()

  if (!user) {
    redirect('/signin')
  }

  const onSubmit = async (formData: FormData) => {
    'use server'

    const form = createPostSchema.parse(formData)
    await createPost(form)

    redirect('/')
  }

  return (
    <Shell variant="markdown">
      <form action={onSubmit} className="grid w-full max-w-xl gap-5">
        <div className="grid gap-2.5">
          <Input
            id="new-story-title"
            aria-describedby="new-story-title"
            name="title"
            required
            minLength={3}
            maxLength={100}
            placeholder="Title"
            className="font-serif text-5xl placeholder:font-serif focus-visible:ring-transparent border-none"
          />
        </div>
        <div className="grid gap-2.5">
          <Input
            id="new-story-body"
            aria-describedby="new-story-body"
            name="body"
            required
            minLength={3}
            maxLength={100}
            placeholder="Tell your story..."
            className="font-serif text-xl h-16 placeholder:font-serif focus-visible:ring-transparent border-none"
          />
        </div>
        <div className="flex flex-col gap-2 xs:flex-row">
          <LoadingButton action="add" variant="ghost">
            Post Story
            <span className="sr-only">Post Story</span>
          </LoadingButton>
        </div>
      </form>
    </Shell>
  )
}
