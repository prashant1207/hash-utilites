const crypto = require('crypto');
var method = hashUtilites.prototype;


function hashUtilites() {

}

method.getHashSHA256Hex = function (text) {
    try {
        var hash = crypto.createHash('sha256').update(text, 'utf8').digest('hex');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }

}

method.getHashSHA256Base64 = function (text) {
    try {
        var hash = crypto.createHash('sha512').update(text, 'utf8').digest('base64');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

method.getHashMD5Hex = function (text) {
    try {
        var hash = crypto.createHash('md5').update(text, 'utf8').digest('hex');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

method.getHashMD5Base64 = function (text) {
    try {
        var hash = crypto.createHash('md5').update(text, 'utf8').digest('base64');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

method.getHashSHA1Hex = function (text) {
    try {
        var hash = crypto.createHash('sha1').update(text, 'utf8').digest('hex');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

method.getHashSHA1Base64 = function (text) {
    try {
        var hash = crypto.createHash('sha1').update(text, 'utf8').digest('base64');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

method.getHashSHA384Hex = function (text) {
    try {
        var hash = crypto.createHash('sha384').update(text, 'utf8').digest('hex');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

method.getHashSHA384Base64 = function (text) {
    try {
        var hash = crypto.createHash('sha384').update(text, 'utf8').digest('base64');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

method.getHashSHAHex = function (text) {
    try {
        var hash = crypto.createHash('sha').update(text, 'utf8').digest('hex');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

method.getHashSHABase64 = function (text) {
    try {
        var hash = crypto.createHash('sha').update(text, 'utf8').digest('base64');
        return hash;
    }
    catch (e) {
        console.log("Error creating hash:" + e);
        return null;
    }
}

module.exports = hashUtilites;
