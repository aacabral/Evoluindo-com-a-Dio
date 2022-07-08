function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;

}

const usuarios = new Map();

usuarios.set('Stephany', 'sudo');
usuarios.set('Luiz', 'Admin');
usuarios.set('Elvira', 'Admin');
usuarios.set('Carolina', 'Admin');
usuarios.set('Guilherme', 'user');

console.log(getAdmins(usuarios));