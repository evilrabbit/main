"use client"

import { useCallback, useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { Lifeline, LifelineLegend } from "@/components/lifeline"
import { SiteFooter } from "@/components/site-footer"
import { argentina } from "@/lib/lifelines/argentina"
import { argentinaTextsEs } from "@/lib/lifelines/argentina-es"
import { localizeLifelineMarkers } from "@/lib/lifelines/build"

export type ArgentinaLang = "en" | "es"

const STRINGS = {
  en: { title: "Argentina — Lifeline", presidents: "Presidents" },
  es: { title: "Argentina — Línea de vida", presidents: "Presidentes" },
} as const

function LanguageToggle({
  lang,
  onChange,
}: {
  lang: ArgentinaLang
  onChange: (lang: ArgentinaLang) => void
}) {
  return (
    <div
      className="flex items-center gap-1.5 text-[13px] text-zinc-400 dark:text-zinc-600"
      role="group"
      aria-label="Language"
    >
      {(["en", "es"] as const).map((option, index) => (
        <span key={option} className="flex items-center gap-1.5">
          {index > 0 && <span aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={lang === option}
            className={cn(
              "uppercase transition-colors duration-300",
              lang === option
                ? "text-zinc-700 dark:text-zinc-300"
                : "hover:text-zinc-500 dark:hover:text-zinc-400",
            )}
          >
            {option}
          </button>
        </span>
      ))}
    </div>
  )
}

export function ArgentinaLifeline({
  initialLang,
}: {
  initialLang: ArgentinaLang
}) {
  const [lang, setLang] = useState<ArgentinaLang>(initialLang)

  const changeLang = useCallback((next: ArgentinaLang) => {
    setLang(next)
    document.cookie = `lang=${next}; path=/; max-age=31536000`
  }, [])

  const markers = useMemo(
    () =>
      lang === "es"
        ? localizeLifelineMarkers(argentina.markers, argentinaTextsEs)
        : argentina.markers,
    [lang],
  )

  return (
    <>
      <main className="flex-1 min-h-0 overflow-y-auto pt-16 md:overflow-hidden">
        <Lifeline
          markers={markers}
          birthYear={argentina.birthYear}
          title={STRINGS[lang].title}
          className="h-full"
        />
      </main>
      <SiteFooter
        className="shrink-0 backdrop-blur-sm"
        legend={
          <>
            <LifelineLegend
              items={[{ type: "mentor", label: STRINGS[lang].presidents }]}
            />
            <LanguageToggle lang={lang} onChange={changeLang} />
          </>
        }
      />
    </>
  )
}
