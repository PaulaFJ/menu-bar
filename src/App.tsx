import { Button } from './components/Button'
import { House, ChartBar, ShoppingCart, User } from 'phosphor-react'

function App() {

  return (
    <div className="bg-brand-gray-700 flex justify-center md:items-center items-end w-full h-screen">
      <div className="flex w-26 md:h-100 h-20 bg-brand-gray-900">
        <Button.Root>
          <House size={32} />
        </Button.Root>

        <Button.Root>
          <ChartBar size={32} />
        </Button.Root>

        <Button.Root>
          <ShoppingCart size={32} />
        </Button.Root>

        <Button.Root>
          <User size={32} />
        </Button.Root>
      </div>
    </div>
  )
}

export default App
