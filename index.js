const crypto = require('crypto');

module.exports = hashUtilites;

function getHashSHA256Hex(text) {
    try {
        var hash = crypto.createHash('sha256').update(text, 'utf8').digest('hex');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }

}

function getHashSHA256Base64(text) {
    try {
        var hash = crypto.createHash('sha512').update(text, 'utf8').digest('base64');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

function getHashMD5Hex(text) {
    try {
        var hash = crypto.createHash('md5').update(text, 'utf8').digest('hex');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

function getHashMD5Base64(text) {
    try {
        var hash = crypto.createHash('md5').update(text, 'utf8').digest('base64');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

function getHashSHA1Hex(text) {
    try {
        var hash = crypto.createHash('sha1').update(text, 'utf8').digest('hex');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

function getHashSHA1Base64(text) {
    try {
        var hash = crypto.createHash('sha1').update(text, 'utf8').digest('base64');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

function getHashSHA384Hex(text) {
    try {
        var hash = crypto.createHash('sha384').update(text, 'utf8').digest('hex');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

function getHashSHA384Base64(text) {
    try {
        var hash = crypto.createHash('sha384').update(text, 'utf8').digest('base64');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

function getHashSHAHex(text) {
    try {
        var hash = crypto.createHash('sha').update(text, 'utf8').digest('hex');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

function getHashSHABase64(text) {
    try {
        var hash = crypto.createHash('sha').update(text, 'utf8').digest('base64');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}
