function LoginComponent() {
  return (
    <form class="p-5 d-flex justify-content-center align-items-center">
      <div className="container w-50">
        <h2 className="text-center">Login Form</h2>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your mail"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your password"
          ></input>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary px-5 my-3">
          Sign in
        </button>
      </div>
    </form>
  );
}

export default LoginComponent;
