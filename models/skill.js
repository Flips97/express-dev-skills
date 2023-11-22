const skills = [
    {id: 101010, skill: 'html', level: 7},
    {id: 202020, skill: 'css', level: 5},
    {id: 303030, skill: 'javascript', level: 6},
    {id: 404040, skill: 'node', level: 3},
    {id: 505050, skill: 'express', level:2}
];

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}


