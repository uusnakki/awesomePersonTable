import { useState } from 'react';
import '../App.css';
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

    //Handles the value change in the form
    /*
    * Checks the value from the "name" attribute.
    * Value can be string or a number (name or age).
    * We add the values to the persondata state.
    */
    const handleAddFormChange = (event: any) => {
        event.preventDefault();

        const fieldName: string = event.target.getAttribute("name");
        const fieldValue: string | number = event.target.value;

        const newPersonData: any = { ...addPersonData };
        newPersonData[fieldName] = fieldValue;

        setPersonData(newPersonData);
    };

    //Handles the "Add a person" button
    /*
    * Creates a person with spesific ID.
    * Logs the person into the console.
    * Adds the person into the table of other persons.
    */
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

    //Handles the "Delete" button
    /*
    * Checks that the "p" type is a person.
    * Finds the index from table that is the same as the id of the person.
    * Deletes that person from our table.
    * Sets person table to the state where the person is removed.
    */
    const handleDeleteClick = (p: Person) => {
        const newPersons = [...persons];

        const index = persons.findIndex((person) => person.id === p.id);

        newPersons.splice(index, 1);

        setPersons(newPersons);
    };


    return (
        <div>
            <form className="FormTable" onSubmit={handleAddFormSubmit}>
                <label >
                    First name:
                    <input
                        className="InputStyle"
                        type="text"
                        name="firstName"
                        placeholder="Enter the first name..."
                        onChange={handleAddFormChange} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        className="InputStyle"
                        type="text"
                        name="lastName"
                        placeholder="Enter the last name..."
                        onChange={handleAddFormChange} />
                </label>
                <br />
                <label>
                    Age:
                    <input
                        className="InputStyle"
                        type="number"
                        name="age"
                        placeholder="0"
                        onChange={handleAddFormChange} />
                </label>
                <br />
                <input className="buttonAdd" type="submit" value="Add a person" />
                <br />
            </form>
            <table className="TableHeader">
                <tbody>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                    </tr>
                </tbody>
            </table>
            {persons.map((person) => (
                <table key={person.id} className="PersonTable">
                    <tbody>
                        <tr>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.age}</td>
                            <td>
                                <button className="buttonDelete" onClick={() =>
                                    handleDeleteClick(person)
                                }>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
};

export default PersonTable;