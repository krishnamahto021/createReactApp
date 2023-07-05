import { name,email } from "./HomePage";

// Complete the Form Component and export it
function submitHandler(event){
  event.preventDefault();
}

const Form = () => (
  <>
    <div>
      <form onSubmit={submitHandler}>{/* Create a h3, 2 inputs and 1 button here */}
      <h3>Login Page</h3>
      <input type="text"  value={name}/><br />
      <input type="email" value={email} /><br />
      <button type="submit">Login</button>
      </form>
    </div>
  </>
);

export default Form;
