import { TextAttributes, type ScrollBoxRenderable } from '@opentui/core'
import type { RefObject } from 'react'

import { COMMANDS } from './commands'
import { getFilteredCommands } from './filter-commands'

type CommandMenuProps = {
  query: string
  selectedIndex: number
  scrollRef: RefObject<ScrollBoxRenderable | null>
  onSelect: (index: number) => void
  onExecute: (index: number) => void
}

const MAX_VISIBLE_COMMANDS = 8

const COMMAND_COL_WIDTH = Math.max(...COMMANDS.map(cmd => cmd.name.length)) + 4

const CommandMenu = ({
  query,
  selectedIndex,
  scrollRef,
  onSelect,
  onExecute
}: CommandMenuProps) => {
  const filtered = getFilteredCommands(query)
  const visibleHeight = Math.min(filtered.length, MAX_VISIBLE_COMMANDS)

  if (filtered.length === 0) {
    return (
      <box paddingX={1} height={1}>
        <text attributes={TextAttributes.DIM}>No matching commands</text>
      </box>
    )
  }

  return (
    <scrollbox ref={scrollRef} height={visibleHeight}>
      {filtered.map((cmd, index) => {
        const isSelected = index === selectedIndex

        return (
          <box
            key={cmd.name}
            flexDirection='row'
            paddingX={1}
            height={1}
            overflow='hidden'
            backgroundColor={isSelected ? '#e60076' : undefined}
            onMouseMove={() => onSelect(index)}
            onMouseDown={() => onExecute(index)}
          >
            <box width={COMMAND_COL_WIDTH} flexShrink={0}>
              <text selectable={false} fg={isSelected ? '#ffffff' : '#888888'}>
                /{cmd.name}
              </text>
            </box>
            <box flexGrow={1} flexShrink={1} overflow='hidden'>
              <text
                selectable={false}
                fg={isSelected ? '#eeeeee' : '#888888'}
                attributes={isSelected ? TextAttributes.BOLD : undefined}
              >
                {cmd.description}
              </text>
            </box>
          </box>
        )
      })}
    </scrollbox>
  )
}

export { CommandMenu }
