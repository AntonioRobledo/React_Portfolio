export function validateEmail(email) {
    const emailRegex = /^([a-zA-Z0-9_-]+)@([\da-z-]+)\.([a-z]{2,6})$/ ;
    return emailRegex.test(String(email).toLowerCase());
}