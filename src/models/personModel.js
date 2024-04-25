
let persons = [{
    id: '1',
    name: 'Sam',
    age: 26,
    hobbies: []
}];

function getAllPersons() {
    return persons;
}

function getPersonById(personId) {
    return persons.find(person => person.id === personId);
}

function createPerson(name, age, hobbies) {
// Generate random ID
    const id = Math.random().toString(36).slice(2, 11); // Using array slice notation
    const newPerson = { id, name, age, hobbies };
    persons.push(newPerson);
    return newPerson;
}

function updatePerson(personId, newData) {
    const index = persons.findIndex(person => person.id === personId);
    if (index !== -1) {
        persons[index] = { ...persons[index], ...newData };
        return persons[index];
    } else {
        return null; // Person not found
    }
}

function deletePerson(personId) {
    const index = persons.findIndex(person => person.id === personId);
    if (index !== -1) {
        persons.splice(index, 1);
        return true; // Person deleted successfully
    } else {
        return false; // Person not found
    }
}

module.exports = {
    getAllPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
};
