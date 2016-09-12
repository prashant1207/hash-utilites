# Hash-Utilities

Simple helper package to generate SHA,SHA1,SHA256,SHA384,SHA512 and MD5 hash from your string. You can get hash string in either 'hex' or 'base64'.

#Usage
var _hashUtilites=require('hash-utilities');
var hashUtilites=new _hashUtilites();

var hashString= hashUtilites.getHashSHA256Hex('string to be hashed');
