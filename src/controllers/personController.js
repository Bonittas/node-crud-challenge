
const personModel = require('../models/personModel');

function getAllPersons(req, res) {
    const persons = personModel.getAllPersons();
    res.json(persons);
}

function getPersonById(req, res) {
    const personId = req.params.personId;
    const person = personModel.getPersonById(personId);
    if (person) {
        res.json(person);
    } else {
        res.status(404).json({ error: 'Person not found' });
    }
}

function createPerson(req, res) {
    const { name, age, hobbies } = req.body;
    const newPerson = personModel.createPerson(name, age, hobbies);
    res.status(201).json(newPerson);
}

function updatePerson(req, res) {
    const personId = req.params.personId;
    const newData = req.body;
    const updatedPerson = personModel.updatePerson(personId, newData);
    if (updatedPerson) {
        res.json(updatedPerson);
    } else {
        res.status(404).json({ error: 'Person not found' });
    }
}

function deletePerson(req, res) {
    const personId = req.params.personId;
    const success = personModel.deletePerson(personId);
    if (success) {
        res.sendStatus(204);
    } else {
        res.status(404).json({ error: 'Person not found' });
    }
}

module.exports = {
    getAllPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
};
