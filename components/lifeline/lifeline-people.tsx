import Image from "next/image"
import type { LifelineMarker } from "./types"

export interface AggregatedLifelinePerson {
  name: string
  mentor: boolean
  met: boolean
  photo?: string
}

export function aggregateLifelinePeople(
  marker: LifelineMarker,
): AggregatedLifelinePerson[] {
  const order: string[] = []
  const map = new Map<
    string,
    { mentor: boolean; met: boolean; photo?: string }
  >()

  const add = (
    name: string,
    type: "mentor" | "met",
    photo?: string,
  ) => {
    if (!map.has(name)) order.push(name)

    const current = map.get(name) ?? { mentor: false, met: false }
    map.set(name, {
      ...current,
      [type]: true,
      photo: current.photo ?? photo,
    })
  }

  marker.mentors?.forEach((person) =>
    add(person.name, "mentor", person.photo),
  )
  marker.met?.forEach((person) => add(person.name, "met"))

  return order.map((name) => ({
    name,
    mentor: map.get(name)!.mentor,
    met: map.get(name)!.met,
    photo: map.get(name)!.photo,
  }))
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
}

interface LifelinePeopleProps {
  people: AggregatedLifelinePerson[]
  allowWrap?: boolean
}

export function LifelinePeople({
  people,
  allowWrap = false,
}: LifelinePeopleProps) {
  if (people.length === 0) return null

  return (
    <div className="w-full space-y-3">
      {people.map((person) => (
        <div key={person.name} className="flex w-full items-center gap-2.5">
          <div className="flex w-3 shrink-0 items-center justify-center gap-0.5">
            {person.mentor && (
              <span
                className="h-1.5 w-1.5 rounded-full bg-blue-500"
                aria-hidden="true"
              />
            )}
            {person.met && (
              <span
                className="h-1.5 w-1.5 rounded-full bg-pink-500"
                aria-hidden="true"
              />
            )}
          </div>
          {person.photo ? (
            <Image
              src={person.photo}
              alt={person.name}
              width={28}
              height={28}
              className="h-7 w-7 shrink-0 rounded-full object-cover"
            />
          ) : (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white dark:bg-white dark:text-black">
              {getInitials(person.name)}
            </span>
          )}
          <p
            className={
              allowWrap
                ? "text-left text-[13px] leading-snug text-zinc-500"
                : "whitespace-nowrap text-left text-[13px] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700 dark:group-hover:text-zinc-400"
            }
          >
            {person.name}
          </p>
        </div>
      ))}
    </div>
  )
}