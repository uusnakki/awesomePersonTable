import { useState } from 'react';
import { nanoid } from 'nanoid'
import { Person } from '../interfaces'
import data from "../mock-data.json";
import PersonTable from './PersonTable'




const PersonCreator = () => {
    const [persons, setPersons] = useState(data);
    const [addPersonData, setPersonData] = useState({
        id: "",
        firstName: "",
        lastName: "",
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

    return (
        <div>
            <form onSubmit={handleAddFormSubmit}>
                <label>
                    First name:
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Matti"
                        onChange={handleAddFormChange} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Meikäläinen"
                        onChange={handleAddFormChange} />
                </label>
                <br />
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        placeholder="24"
                        onChange={handleAddFormChange} />
                </label>
                <br />
                <input type="submit" value="Add a person" />
                <br />

                {persons.map((person) => (
                    <PersonTable
                        person={person}
                    />
                ))}

            </form>
        </div>
    );
};

export default PersonCreator;