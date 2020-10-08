import { User } from "../entities/User";

export function validateEmail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    throw new Error('Invalid email');
}

export function validatePasswd(passwd: string) {
    if(!passwd || passwd.length < 4) throw new Error('Invalid password');
    return true;
}

export function validateUsername(username: string) {
    if(!username || username.length < 4) throw new Error('Invalid username');
    return true;
}

export function validateName(name: string) {
    if(!name || hasNumber(name) || name.length < 2) throw new Error('Invalid name used');
    return true;
}

export function validateUser(user: User) {
    if(!user || !validateUsername(user.username)
        || !validateName(user.firstName) || !validateName(user.lastName)
        || !user.passwd || !validatePasswd(user.passwd)) {
            throw new Error('Invalid User information');
    }

    return true;
}

function hasNumber(str: string) {
    return /\d/.test(str);
}