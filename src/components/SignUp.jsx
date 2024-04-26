import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";



const SignUp = () => {
  const { createUser } = useContext(AuthContext)
  console.log(createUser);


  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    const nosto = { email, pass }
    console.log(nosto);
  }
  return (

    <div>
      <div className="text-center py-4">
        <h1 className="text-5xl font-bold text-center">Sign UP now!</h1>
      </div>
      <div className="w-[700px] mx-auto text-center shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="lebel-text">Email</span>
            </label>
            <input type="email" id="email" name="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" id="password" placeholder="password" name="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;