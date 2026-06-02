import { createCliRenderer } from '@opentui/core'
import { createRoot } from '@opentui/react'

/**
 * Renders the main UI: a full-size, centered layout that contains a focused textarea with the placeholder "Hello World!".
 *
 * The outer container centers content both horizontally and vertically and fills available space. The inner container centers its children horizontally and aligns them to the bottom.
 *
 * @returns A React element representing the centered layout with a focused textarea placeholdered with "Hello World!".
 */
function App() {
  return (
    <box alignItems='center' justifyContent='center' flexGrow={1}>
      <box justifyContent='center' alignItems='flex-end'>
        <textarea focused placeholder={'Hello World!'} />
      </box>
    </box>
  )
}

const renderer = await createCliRenderer()
createRoot(renderer).render(<App />)
