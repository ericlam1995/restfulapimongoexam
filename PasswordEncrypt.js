const cryptoJS = require('crypto-js');

var PasswordEncrypt = {
    set: (key, value) => {
        var key = cryptoJS.enc.Utf8.parse(key);
        var iv = cryptoJS.enc.Utf8.parse(key);
        var encrypted = cryptoJS.AES.encrypt(cryptoJS.enc.Utf8.parse(value.toString()), key,
          {
            keySize: 128 / 8,
            iv: iv,
            mode: cryptoJS.mode.CBC,
            padding: cryptoJS.pad.Pkcs7
          });
    
        return encrypted.toString();
    },
    get: (key, value) => {
        var key = cryptoJS.enc.Utf8.parse(key);
        var iv = cryptoJS.enc.Utf8.parse(key);
        var decrypted = cryptoJS.AES.decrypt(value, key, {
          keySize: 128 / 8,
          iv: iv,
          mode: cryptoJS.mode.CBC,
          padding: cryptoJS.pad.Pkcs7
        });
    
        return decrypted.toString(cryptoJS.enc.Utf8);
    }
};
module.exports = PasswordEncrypt;