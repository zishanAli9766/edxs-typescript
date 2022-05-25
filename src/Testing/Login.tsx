import React from "react";

const Logins: React.FC<any> = () =>{

    return(
        <div>
          
        <form data-test="login-form" >
            <input data-test="login-input" name="login"  /><br />
            <input data-test="password-input" name="password"   type="password" /><br />
            <input data-test="submit-button" type="submit" value="Login" /><br />
        </form>
<button>OK</button>
<button>No</button>
    </div>
)
}

export default Logins



