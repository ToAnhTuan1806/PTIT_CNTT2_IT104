import React, { useCallback, useState } from 'react'

export default function LoginForm() {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=> {
        const {name, value}= e.target
        setData((prev)=> ({
            ...prev, [name]:value
        }))
    }
    const handleSubmit= useCallback((e: React.FormEvent) =>{
        e.preventDefault()
        console.log(data);
        
    }, [data])
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label><br />
                <input type="email" placeholder='...' name='email' value={data.email} onChange={handleChange}/>
            </div>
            <div>
                <label>Password</label><br />
                <input type="password" placeholder='...' name='password' value={data.password} onChange={handleChange}/>
            </div>
            <button style={{marginTop: "10px"}} type='submit'>Submit</button>
        </form>
    </div>
  )
}
