import { useNavigate } from "react-router-dom"
import logoImCode from '../../images/imcode_logo.svg'
import Axios from 'axios'
import NProgress from "nprogress"

function Login() {
  const navigate = useNavigate()

  var url_string = window.location.href
  var url = new URL(url_string);
  var message = url.searchParams.get("message")
  if (message) {
    document.getElementById("mensagem").style.display = "block";
  }

  const verifyLogin = () => {
    NProgress.start();
    const d = new Date();
    let day = d.getDay();
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    Axios.post('https://iml-scrum-server.vercel.app/api/server/login',
      { email: email, password: password })
      .then((response) => {
        if (response['data'].length > 0) {
          NProgress.done();
          var data = response['data'][0]

          var id = data['id']
          var email = data['email']
          var nome = data['complete_name']
          var job = data['job']
          var geturl = btoa(`id=${id}&email=${email}&nome=${nome}`)

          if (data['job'] == 0) {
            if (day == 5) {
              navigate(`/Friday?token=${geturl}`)
              location.reload()
            } else {
              navigate(`/form?token=${geturl}`)
            }
          } else if (data['job'] == 2) {
            navigate(`/PJ?token=${geturl}`)
          } else {
            navigate(`/admin/table?token=${geturl}`)
            location.reload()
          }

        } else {
          document.getElementById("alertalogin").style.display = "block";
          NProgress.done();
        }

      });
  }


  return (
    <>
      <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div id="alertalogin" style={{ display: 'none' }} class="flex items-center pt-5 fixed top-0 bg-red-500 text-white text-sm font-bold px-4 py-3" role="alert">
          <p>Credenciais Incorretas</p>
        </div>
        <div class="max-w-md w-full space-y-8 ">
          <script src='https://unpkg.com/nprogress@0.2.0/nprogress.js'></script>
          <link rel='stylesheet' href='https://unpkg.com/nprogress@0.2.0/nprogress.css' />
          <div>
            <img src={logoImCode} alt="ImCode Logo" class="mx-auto h-12 w-auto" />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Entre com a sua conta</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              SCRUM
            </p>
          </div>
          <div class="mt-8 space-y-6 " >
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Endereço de email</label>
                <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Endereço de email" />
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Senha" />
              </div>
            </div>

            <div>
              <button onClick={() => verifyLogin()} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="min-h-screen bg-white">
    <div id="alertalogin" style={{display:'none'}} class="flex items-center pt-5 fixed top-0 bg-red-500 text-white text-sm font-bold px-4 py-3" role="alert">
          <p>Credenciais Incorretas</p>
    </div>
    <script src='https://unpkg.com/nprogress@0.2.0/nprogress.js'></script>
    <link rel='stylesheet' href='https://unpkg.com/nprogress@0.2.0/nprogress.css'/>
      <div className="box-login min-h-screen w-72 my-0 mx-auto text-white flex flex-col justify-center items-center">
        <img src={logoImCode} alt="ImCode Logo" className="w-16 mb-5"/>
        <h1 className="mb-14 font-semibold text-3xl text-indigo-700">Im Code</h1>

        <div className="flex flex-col  justify-center bg-white p-10 min-w-max drop-shadow">
          <h1 className="mb-10 font-semibold text-3xl text-black">Logue com sua conta</h1>

          <label htmlFor="email" className="font-semibold text-base text-black ">Email</label>
          <input id="email" name="email" className="w-full border-2 border-gray-300 rounded-lg p-2" type="email" placeholder="Email" />
          
          <label htmlFor="password" className="font-semibold text-base text-black">Password</label>
          <input id="password" name="password" className="w-full border-2 border-gray-300 rounded-lg p-2 mt-4" type="password" placeholder="Senha" />
          <button onClick={() => verifyLogin()} className="w-full bg-indigo-500 text-white rounded-lg p-2 mt-4" type="button">Entrar</button>
        </div>
      
       <p className="mt-20 text-black">© Copyright 2022 I'm Code</p>
       
      </div>  
    </div>*/}
    </>
  )
}



export default Login