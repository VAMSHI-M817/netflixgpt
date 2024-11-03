


export const validateData = (email, password) => {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!validEmail) return "Invalid email address. Please enter a valid email"
    if (!validPassword) return "Invalid password. Please include at least one uppercase letter and a special character"

    return null

}