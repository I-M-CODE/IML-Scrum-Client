import { useNavigate } from "react-router-dom"
import logo from '../../images/imcode_logo.svg'
import Axios from 'axios'

function FormFriday(){

  const navigate = useNavigate()

    var url_string = window.location.href
    var url = new URL(url_string);
    var token = url.searchParams.get("token")
    url['search'] = atob(token)
    var id = url.searchParams.get("id")
    var nome = url.searchParams.get("nome")
    var email = url.searchParams.get("email")

    const insertForm = () =>{
       
      const input1 = document.getElementById('input1').value
      const input2 = document.getElementById('input2').value
      const input3 = document.getElementById('input3').value
      const input4 = document.getElementById('input4').value
      const input5 = document.getElementById('input5').value
      const input6 = document.getElementById('input6').value
      const input7 = document.getElementById('input7').value
      const input8 = document.getElementById('input8').value
      const input9 = document.getElementById('input9').value
      const input10 = document.getElementById('input10').value

      Axios.post('https://iml-scrum-server.herokuapp.com/insertFriday', {colaborador: nome, colaborador_email: email, input1: input1, input2: input2, input3: input3, input4: input4, input5: input5, input6: input6, input7: input7, input8: input8, input9: input9, input10: input10})
      .then((response)=>{
        navigate('/')
        location.reload()
      })  
    }

    if (id == null){
      return(<h1>Permission Denied</h1>)
    }else{
  return( 
    <div class="flex min-h-screen bg-indigo-700 items-center justify-center">
      <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <div class="flex justify-center py-4">
          <div class="flex bg-gray-800 rounded-full md:p-4 p-2 border-2 border-gray-300">
            <img src={logo} className="w-8 h-8" alt="" />
          </div>
        </div>

        <div class="flex justify-center">
          <div class="flex">
            <h1 class="text-gray-600 font-bold md:text-2xl text-xl">I'mLabs Form Friday!!!</h1>
          </div>
        </div>

        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Como foi sua semana?</label>
          <input id="input1" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
        </div>

        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Qual(is) projetos você desenvolveu essa semana?</label>
          <input id="input2" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
          <div class="grid grid-cols-1">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Qual foi a melhor parte dessa semana?</label>
            <input id="input3" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
          </div>
          <div class="grid grid-cols-1">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">E a pior (em questão de dificuldade e gosto)</label>
            <input id="input4" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
          </div>
        </div>

        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Qual seus planos para a próxima semana?</label>
          <input id="input5" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text"  />
        </div>

        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Quais são as metas para a próxima semana?</label>
          <input id="input6" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text"  />
        </div>

        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Como está o planejamento em relação aos prazos?</label>
          <input id="input7" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text"  />
        </div>

        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Você tem algum descontentamento com os projetos desenvolvidos?</label>
          <input id="input8" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text"  />
        </div>

        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Possuí alguma observação/aviso sobre essa próxima semana que precisemos saber?</label>
          <input id="input9" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text"  />
        </div>

        <div class="grid grid-cols-1 mt-5 mx-7">
          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Necessita de alguma coisa do resto da equipe?</label>
          <input id="input10" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text"  />
        </div>

        <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
          <button onClick={() => goBack()} class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancelar</button>
          <button onClick={() => insertForm()} class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Enviar</button>
        </div>

      </div>
    </div>
  )
}
}

export default FormFriday;