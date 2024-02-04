import * as bcrypt from 'bcrypt';

// const SALT  = 10;

export function encodePassword(rawPassport: string) {
    const SALT = bcrypt.genSaltSync();
    return bcrypt.hashSync(rawPassport, SALT);
}

export function comparePasswrod(rawPassword: string, hash: string) {
    return bcrypt.compareSync(rawPassword, hash);
}