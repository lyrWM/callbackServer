const crypto = require("crypto");

const createSalt = async () => {
    return new Promise(async (resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (err) {
                return reject(err);
            } else {
                resolve(buf.toString("base64"));
            }
        });
    });
};

const encryptPassword = async (password) => {
    return new Promise(async (resolve, reject) => {
        const salt = await createSalt();
        crypto.pbkdf2(password, salt, 9999, 64, "sha512", (err, key) => {
            if (err) {
                reject(err);
            } else {
                resolve({ hashedPassword: key.toString("base64"), salt: salt });
            }
        });
    });
};

const validatePassword = async (password, salt) => {
    return new Promise(async (resolve, reject) => {
        crypto.pbkdf2(password, salt, 9999, 64, "sha512", (err, key) => {
            if (err) {
                reject(err);
            } else {
                resolve(key.toString("base64"));
            }
        });
    });
};

module.exports = { encryptPassword, validatePassword };
