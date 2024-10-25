


export const validateData = (email, password) => {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!validEmail) return "Email is Invalid"
    if (!validPassword) return "Password is Invalid"

    return null

}