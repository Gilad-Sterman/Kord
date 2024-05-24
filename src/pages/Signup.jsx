import { useNavigate } from "react-router-dom"

export function Signup() {
    const navigate = useNavigate()

    return (
        <section className='sign-up' >
            <h2>Sign up</h2>
            <form>
                <div className="form-input">
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" name="fname" id="fname" placeholder="Full name" required />
                </div>
                <div className="form-input">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" required />
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@gmail.com" required />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" required />
                </div>
                <button>Sign Up</button>
            </form>
            <button onClick={() => navigate('/')}>Continue As Guest</button>
            <h4>Already Have An Account? <span onClick={() => navigate('/login')}>Login</span></h4>
        </section>
    )
}