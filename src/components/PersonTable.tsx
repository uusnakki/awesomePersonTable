import { useState } from 'react';
import { nanoid } from 'nanoid'
import { Person } from '../interfaces'
import data from "../mock-data.json";

const PersonTable = () => {
    const [persons, setPersons] = useState(data);
    const [addPersonData, setPersonData] = useState({
        id: nanoid(),
        firstName: "Basic",
        lastName: "Test",
        age: 0
    });

    const handleAddFormChange = (event: any) => {
        event.preventDefault();

        const fieldName: string = event.target.getAttribute("name");
        const fieldValue: string | number = event.target.value;

        const newPersonData: any = { ...addPersonData };
        newPersonData[fieldName] = fieldValue;

        setPersonData(newPersonData);
    };

    const handleAddFormSubmit = (event: any) => {
        event.preventDefault();

        const newPerson = {
            id: nanoid(),
            firstName: addPersonData.firstName,
            lastName: addPersonData.lastName,
            age: addPersonData.age
        };
        console.log(newPerson)
        const newPersons = [...persons, newPerson];
        setPersons(newPersons);
    };

    const handleDeleteClick = ( p: Person ) => {
        const newPersons = [...persons];
    
        const index = persons.findIndex((person) => person.id === p.id);
    
        newPersons.splice(index, 1);
    
        setPersons(newPersons);
      };
    

    return (
        <div>
            <form onSubmit={handleAddFormSubmit}>
                <label>
                    First name:
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter the first name..."
                        onChange={handleAddFormChange} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter the last name..."
                        onChange={handleAddFormChange} />
                </label>
                <br />
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        placeholder="0"
                        onChange={handleAddFormChange} />
                </label>
                <br />
                <input type="submit" value="Add a person" />
                <br />
            </form>
            {persons.map((person) => (
                    <tr>
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.age}</td>
                    <button onClick={() =>
                      handleDeleteClick(person)
                    }>
                      Delete
                    </button>
                  </tr>
                ))}

        </div>
    );
};

export default PersonTable;