// KYC in bank>> email, name, phonenumber, aadhaar, pan
// KYC submitted succeessfully
// python import pandas
// java>> import java.util.Scanner;

const userIn = require('prompt-sync')();

var email, name, contact,aadhaar, pan
name = userIn("let us know your name");
email = userIn("let us know your email");
contact = userIn("let us know your contact number");
aadhaar = userIn("let us know your aadhaar number");
pan = userIn("let us know your pan number");
console.log("Dear "+name+", KYC submitted successfully");