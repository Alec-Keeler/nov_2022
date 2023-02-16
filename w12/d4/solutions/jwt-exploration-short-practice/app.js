// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package

//!!START
const jwt = require('jsonwebtoken');
//!!END

// Define variables - DO NOT MODIFY
let token;
let payload;

// 1. Sign (create) a JWT containing your email address

//!!START
token = jwt.sign(
    { email: "my.favorite.student@appacademy.io" },
    process.env.SECRET_KEY,
    { expiresIn: '1s' }
);
//!!END

// See the JWT in the console
console.log('JWT:', token);

// 2. Decode a JWT Payload

//!!START
payload = jwt.decode(token);
//!!END

// See the decoded payload in the console
console.log('Payload:', payload);

// 3. Verify a JWT

//!!START
payload = jwt.verify(token, process.env.SECRET_KEY);
//!!END

// See the verified payload in the console
console.log('Verified Payload:', payload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

//!!START
const ALT_SECRET_KEY = require('crypto').randomBytes(64).toString('hex');
try {
    jwt.verify(token, ALT_SECRET_KEY);
} catch (err) {
    console.log(err);
}
//!!END

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

//!!START
setTimeout(() => {
    try {
        console.log(jwt.decode(token));
        // payload = jwt.verify(token, process.env.SECRET_KEY);
    } catch (err) {
        console.log(err);
    }
}, 1001);
//!!END
