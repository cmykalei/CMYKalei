// Global styles consolidated in index.css; App.css removed
import * as Tooltip from '@radix-ui/react-tooltip'
import { Header } from '@/components/ui/Header';


function App() {
  return (
    <div style={{ display: 'grid', justifyItems: 'center', gap: 12 }}>
      <Header
            greeting="Kia ora"
            name="Kalei"
            qualification="Undergrad, Bachelor of Computer Science, UoW"
            flex="row"
      />

      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 12 }}>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <a
                href="https://github.com/cmykalei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub: @cmykalei"
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                GitHub: @cmykalei
              </a>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                  sideOffset={6} style={{ background: 'black', color: 'white', padding: '6px 8px', borderRadius: 6, fontSize: 12 }}>
                Open GitHub profile
                <Tooltip.Arrow width={10} height={5} style={{ fill: 'black' }} />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <a
                href="https://instagram.com/cmykalei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram: @cmykalei"
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                Instagram: @cmykalei
              </a>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content sideOffset={6} style={{ background: 'black', color: 'white', padding: '6px 8px', borderRadius: 6, fontSize: 12 }}>
                Open Instagram profile
                <Tooltip.Arrow width={10} height={5} style={{ fill: 'black' }} />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </div>
  )
}

export default App
