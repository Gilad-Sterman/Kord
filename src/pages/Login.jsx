import { useNavigate } from "react-router-dom"

export function Login() {
    const navigate = useNavigate()

    return (
        <section className='login' >
            <h2>Login</h2>
            <form>
                <div className="form-input">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" required />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" required />
                </div>
                <button>Login</button>
            </form>
            <h4>Don't Have An Account? <span onClick={() => navigate('/signup')}>Sign Up Now</span></h4>
        </section>
    )
}