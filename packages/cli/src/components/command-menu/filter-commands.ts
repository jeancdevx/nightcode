import { COMMANDS } from './commands'
import type { Command } from './types'

export const getFilteredCommands = (query: string): Command[] => {
  if (query.trim().length === 0) return COMMANDS

  return COMMANDS.filter(cmd =>
    cmd.name.toLowerCase().startsWith(query.toLowerCase())
  )
}
