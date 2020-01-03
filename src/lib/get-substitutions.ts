interface Span {
  start: number
  end: number
}

export default function getSubstitutions(contents: string, locations: ReadonlyArray<Span>) {
  const parts: string[] = []
  let lastIndex = 0

  for (const span of locations) {
    parts.push(contents.slice(lastIndex, span.start))
    const param = 'x'.repeat(span.end - span.start - 2)
    parts.push(`'${param}'`)
    lastIndex = span.end
  }

  parts.push(contents.slice(lastIndex))

  return parts.join('')
}
