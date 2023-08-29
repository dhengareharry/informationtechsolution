import { useState } from "react"
import "../Component/Form.css"
function Form(){
    // State Management
    const [formdata,setFormData]=useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            password:""
        }
    )
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });

     // Error Handling
    const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };

    if (!formdata.firstName) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formdata.lastName) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formdata.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formdata.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
//   Form Submission
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (validateForm()) {
        // Process and submit form data
        console.log('Form data:', formdata);
      }
      // Clear Input after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      })
  }
    return(
       <div className="container">
        <h1>Form</h1>
        <form className="Form-container" onSubmit={handleSubmit}>
            <div>
                <label>FirstName</label>
                <input 
                 type="text"
                 name="FirstName"
                 placeholder="FirstName"
                 value={formdata.firstName}
                 onChange={(e)=>setFormData({...formdata,firstName:e.target.value})}
                />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            
            <div>
                <label>LastName</label>
                <input 
                type="text"
                name="LastName"
                placeholder="LastName"
                value={formdata.lastName}
                onChange={(e)=>setFormData({...formdata,lastName:e.target.value})}
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            
            <div>
                <label>Email</label>
                <input
                type="email"
                name="email"
                placeholder="Email"
                value={formdata.email}
                onChange={(e)=>setFormData({...formdata,email:e.target.value})}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            
            <div>
                <label>Password</label>
                <input
                type="password"
                name="password"
                placeholder="Password"
                value={formdata.password}
                onChange={(e)=>setFormData({...formdata,password:e.target.value})}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            
            <button className="submit-btn" type="submit">Submit</button>
        </form>
       </div>
    )
}
export default Form