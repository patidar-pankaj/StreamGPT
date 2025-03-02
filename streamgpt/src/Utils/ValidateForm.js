export const validateForm = (email, password) => {

    const isEmailValid = /^[^@]+@[^@]+\.[^@]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if(!isEmailValid) return "Invalid Email";
    if(!isPasswordValid) return "Invalid Password";

    return null;

}