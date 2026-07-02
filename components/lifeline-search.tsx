"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

interface LifelinePerson {
  slug: string
  name: string
}

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function LifelineSearch({ people }: { people: LifelinePerson[] }) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [notFound, setNotFound] = useState(false)

  const findMatch = (value: string) => {
    const slug = slugify(value)
    if (!slug) return undefined

    return people.find(
      (person) =>
        person.slug === slug || slugify(person.name).includes(slug),
    )
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const match = findMatch(query)
    if (match) {
      setNotFound(false)
      router.push(`/lifeline/${match.slug}`)
      return
    }

    setNotFound(true)
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setNotFound(false)
        }}
        placeholder="Type a name"
        autoComplete="off"
        spellCheck={false}
        className="w-full rounded-full border border-black/15 bg-transparent px-5 py-3 text-center text-[15px] outline-none transition-colors placeholder:text-zinc-400 focus:border-black/40 dark:border-white/15 dark:placeholder:text-zinc-600 dark:focus:border-white/40"
      />
      <p
        aria-live="polite"
        className="mt-4 h-5 text-center text-[13px] text-zinc-500"
      >
        {notFound &&
          "No lifeline for that name yet — soon you'll be able to create one."}
      </p>
    </form>
  )
}
