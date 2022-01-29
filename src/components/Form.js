import React, { useState } from 'react';
import logo from './profile-logo.jpg';

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
        const response = postData();
        async function postData(url = 'http://locahost:3001/api/user', data = values) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(data)
          });
          return response.json();
        }
        console.log(response);
    }


    return (
        <div className="container w-25 p-3 my-4 border border-primary">
            <img src={logo} class="rounded mx-auto d-block w-25" alt="profile-image"></img>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control border border-primary" value={values.email} onChange={handleChange} id="email" aria-describedby="emailHelp"/>
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control border border-primary" value={values.password} onChange={handleChange} id="password"/>
                </div>
                
                <button type="submit" className="btn btn-primary w-100" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Form;
