const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: fist, lastName: last}}) {
    return `${fist} ${last}`;
}

console.log(userId(user)); // 42

console.log(getFullName(user)); //John doe
