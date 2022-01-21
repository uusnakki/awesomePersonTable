//import { useEffect, useState } from 'react';
import { Person } from '../interfaces'

interface PersonProps {
  person: Person
}

const PersonTable: React.FC<PersonProps> = ({ person }: PersonProps) => {


  return (
    <tr>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.age}</td>
    </tr>
  );
};

export default PersonTable;