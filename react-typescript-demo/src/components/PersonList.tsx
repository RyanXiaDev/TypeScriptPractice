import {Name} from './Person.types'

interface PersonListProps{
  names: Name[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name,idx) => (
        <h2 key={idx}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};
