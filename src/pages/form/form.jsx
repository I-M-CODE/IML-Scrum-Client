import { useNavigate } from "react-router-dom"
import logo from '../../images/imcode_logo.svg'
import Axios from 'axios'
import NProgress from "nprogress"

function Form(){

    const navigate = useNavigate()

    var url_string = window.location.href
    var url = new URL(url_string);
    var token = url.searchParams.get("token")
    url['search'] = atob(token)
    var nome = url.searchParams.get("nome")
    var id = url.searchParams.get("id")
    var email = url.searchParams.get("email")

    const goBack = () =>{
        NProgress.start();
        navigate('/')
        location.reload()
    }

    const insertForm = () =>{
      NProgress.start();
      const input1 = document.getElementById('input1').value
      const input2 = document.getElementById('input2').value
      const input3 = document.getElementById('input3').value

      Axios.post('https://iml-scrum-server.vercel.app/api/server/insertForms', {colaborador: nome, colaborador_email: email, input1: input1, input2: input2, input3: input3})
      .then((response)=>{
        document.getElementById("mensagem").style.display = "block";
        NProgress.done();
      })  
    }
    
    if (token == null){
      return(<h1>Permission Denied</h1>)
    }else{
  return( 
    <div class="flex min-h-screen bg-indigo-700 items-center justify-center">
    <div id="mensagem" style={{display:'none'}} class="flex items-center fixed top-0 bg-green-500 text-white text-sm font-bold px-4 py-3" role="alert">
          <p>Formulário enviado</p>
    </div>
      <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <div class="flex justify-center py-4">
          <div class="flex bg-gray-800 rounded-full md:p-4 p-2 border-2 border-gray-300">
            <img src={logo} className="w-8 h-8" alt="" />
          </div>
        </div>

        <div class="flex justify-center">
          <div class="flex">
            <h1 class="text-gray-600 font-bold md:text-2xl text-xl">I'mLabs Form</h1>
          </div>
        </div>
     
          <div class="grid grid-cols-1 m-5">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">O que você fez no último dia útil?</label>
            <textarea id="input1" class="h-36 py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
          </div>
          <div class="grid grid-cols-1 m-5">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">O que vai fazer hoje?</label>
            <textarea id="input2" class="h-36 py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
          </div>
          <div class="grid grid-cols-1 m-5">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Tem algo que nós podemos te ajudar?</label>
            <textarea id="input3" class="h-36 py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
          </div>


        <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
          <button onClick={() => goBack()} class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Sair</button>
          <button onClick={() => insertForm()} class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Enviar</button>
        </div>

      </div>
    </div>
  )
}
}

export default Form;