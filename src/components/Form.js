import React, { useState } from 'react';

function Form() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    
    let handleChange = (e)=> {
        setValues(()=>{
            return{
                ...values,
                [e.target.type]: e.target.value,
            }
        } 
        );
    }
    
    let onSubmit = (e)=>{
        e.preventDefault();
        console.log(values);
    }


    return (
        <div className="container w-50 p-3 my-4">
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={values.email} onChange={handleChange} id="email" aria-describedby="emailHelp"/>
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={values.password} onChange={handleChange} id="password"/>
                </div>
                
                <button type="submit" className="btn btn-primary w-100" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Form;
