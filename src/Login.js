function Login(){

    return(
        <div>
            <h1>::Login page::</h1>
            <form>
  <div class="offset-3 text-black w-50 mt-5 bg-secondary border">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control  w-5" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control w-5" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input w-5" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}
export default Login