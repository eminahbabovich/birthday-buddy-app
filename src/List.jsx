import Person from './Person'

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person person={person} key={person.id} />
      })}
    </section>
  )
}
export default List
