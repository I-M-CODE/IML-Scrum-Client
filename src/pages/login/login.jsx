import { useNavigate } from "react-router-dom"
import logoImCode from '../../images/imcode_logo.svg'
import Axios from 'axios'

function Login(){

  const navigate = useNavigate()

  const verifyLogin = () => { 

    const d = new Date();
    let day = d.getDay();
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    Axios.post('https://iml-scrum-server.herokuapp.com/login', 
    {email: email, password: password})
    .then((response)=> {
      if (response['data'].length > 0){
            var data = response['data'][0]

            var id = data['id']
            var email = data['email']
            var nome = data['complete_name']
            var permissions = data['permissions']
            var geturl = btoa(`id=${id}&email=${email}&nome=${nome}`)
            
            if(data['permissions'] == 0){
              if(day==5){
                navigate(`/Friday?token=${geturl}`)
                location.reload()
              }else{
                navigate(`/form?token=${geturl}`)
              }
            }else{
              navigate(`/admin/table?token=${geturl}`)
              location.reload()
            }

      }else{
        console.log('errado')
      }

    });
  }

  return (
    <div className="min-h-screen bg-indigo-700">
      <div className="box-login min-h-screen w-72 my-0 mx-auto text-white flex flex-col justify-center items-center">
        <img src={logoImCode} alt="ImCode Logo" className="w-16 mb-5"/>
        <h1 className="mb-14 font-semibold text-3xl">Im Code</h1>
        <h3 className="mb-10 text-2xl font-medium">Logue na sua conta</h3>
      
          <div className="emailInput flex flex-col">
            <label htmlFor="email" className="font-semibold text-base mb-1">Email</label>
            <input type="text" name="email" id="email" className="p-2 rounded text-gray-200 bg-indigo-900 font-semibold" required/>
          </div>
          <div className="passwordInput flex flex-col mt-4">
            <label htmlFor="password" className="font-semibold text-base mb-1">Password</label>
            <input type="password" name="password" id="password" className="p-2 rounded bg-indigo-900" required/>
          </div>
          <div className="remember-forgot flex items-center justify-between mt-5">
          </div>

          <button onClick={() => verifyLogin()} className="min-w-full mt-5 bg-white text-indigo-700 font-semibold p-2 rounded">Entrar</button>
      
       <p className="mt-20">© Copyright 2022 I'm Code</p>
       
      </div>  
    </div>
    )
}



export default Login