import List from './List'
import data from './data'
import { useState } from 'react'

const App = () => {
  const [people, setPeople] = useState(data)

  const handleClick = () => {
    setPeople([])
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button className="btn btn-block" type="button" onClick={handleClick}>
          Clear All
        </button>
      </section>
    </main>
  )
}
export default App
