export function isFile(name: string): boolean {
  return name.endsWith('.js') || name.endsWith('.ts') || name.endsWith('.md')
}

export function isUrl(name: string) {
  return name.startsWith('http') || name.startsWith('https')
}

export function isScript(name: string) {
  return name.endsWith('.js') || name.endsWith('.ts')
}