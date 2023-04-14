const Register_User = (e) => {
    console.log(e)
}

export function Register() {
    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={e => Register(e)}>
            
            </form>
        </div>
    )
}