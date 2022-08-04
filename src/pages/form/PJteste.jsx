import { useNavigate } from "react-router-dom"
import logo from '../../images/imcode_logo.svg'
import Axios from 'axios'
import NProgress from "nprogress"
import InputMask from "react-input-mask";
import { useState } from "react";
import { useEffect } from "react";

function PJ() {
  const [horasTrabalhadas, setHorasTrabalhadas] = useState(0);
  const [entrada, setEntrada] = useState("");
  const [intervalo, setIntervalo] = useState("");
  const [retorno, setRetorno] = useState("");
  const [saida, setSaida] = useState("");

  const navigate = useNavigate()

  var url_string = window.location.href
  var url = new URL(url_string);
  var token = url.searchParams.get("token")
  url['search'] = atob(token)
  var nome = url.searchParams.get("nome")
  var id = url.searchParams.get("id")
  var email = url.searchParams.get("email")

  useEffect(() => {
    calculahoras();
  }, [entrada, intervalo, retorno, saida])

  const calculahoras = () => {
    const new_entrada = entrada.split(':');
    const new_saida = saida.split(':');
    const new_intervalo = intervalo.split(':');
    const new_retorno = retorno.split(':');

    if (entrada && saida) {
      if (saida != NaN) {
        const calc = (parseInt(new_saida[0]) - parseInt(new_entrada[0])) + (parseInt(new_saida[1]) - parseInt(new_entrada[1])) - (parseInt(new_retorno[0]) - parseInt(new_intervalo[0])) + (parseInt(new_retorno[1]) - parseInt(new_intervalo[1]));

        setHorasTrabalhadas(calc);
      }
    }
  }

  const calcHours = () => {
    const entrada = document.getElementById('input1').value
    const intervalo = document.getElementById('input2').value
    const retorno = document.getElementById('input3').value
    const saida = document.getElementById('input4').value

    if (entrada !== '' && saida !== '') {

      var value_start = entrada.split(':');
      var value_end = saida.split(':');

      var time_start = new Date();
      var time_end = new Date();

      time_start.setHours(value_start[0], value_start[1])
      time_end.setHours(value_end[0], value_end[1])

      const miliDiff = time_end - time_start;
      var hourDiff = (miliDiff / 60000) / 60

      if (intervalo !== '' && retorno !== '') {
        var value_start2 = intervalo.split(':');
        var value_end2 = retorno.split(':');

        var time_start2 = new Date();
        var time_end2 = new Date();

        time_start2.setHours(value_start2[0], value_start2[1])
        time_end2.setHours(value_end2[0], value_end2[1])

        const miliDiff2 = time_end2 - time_start2;
        const hourDiff2 = (miliDiff2 / 60000) / 60

        console.log(hourDiff)
        console.log(hourDiff2)

        hourDiff = hourDiff - hourDiff2
      }

      document.getElementById('input7').value = hourDiff.toFixed(2).replace('.', ':')
    }
  }

  const goBack = () => {
    NProgress.start();
    navigate('/')
    location.reload()
  }

  const insertForm = () => {
    NProgress.start();
    const input1 = document.getElementById('input1').value
    const input2 = document.getElementById('input2').value
    const input3 = document.getElementById('input3').value
    const input4 = document.getElementById('input4').value
    const input5 = document.getElementById('input5').value
    const input6 = document.getElementById('input6').value
    const input7 = document.getElementById('input7').value
    const input8 = document.getElementById('input8').value

    Axios.post('https://iml-scrum-server.vercel.app/api/server/insertPJ', { colaborador: nome, colaborador_email: email, input1: input1, input2: input2, input3: input3, input4: input4, input5: input5, input6: input6, input7: input7, input8: input8 })
      .then((response) => {
        document.getElementById("mensagem").style.display = "block";
        NProgress.done();
      })
  }

  if (token == null) {
    return (<h1>Permission Denied</h1>)
  } else {
    return (
      <section class="bg-gray-100 min-h-screen">
        <div id="mensagem" style={{ display: 'none' }} class="flex items-center fixed top-0 bg-green-500 text-white text-sm font-bold px-4 py-3" role="alert">
          <p>Formulário enviado</p>
        </div>
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:py-12 lg:col-span-2">
              <p class="max-w-xl text-lg">
                Adicione suas horas trabalhadas.
              </p>

              <div class="mt-8">
                <a href="" class="text-2xl font-bold text-indigo-600"> Preencha as informações corretamente. </a>
              </div>

              {/* Card com horas trabalhadas */}
              <div class="mt-8 max-w-max">
                <div class="bg-white overflow-hidden shadow rounded-lg p-3">
                  <p class="text-2xl font-bold text-indigo-600"> Horas trabalhadas</p>

                  <p class={`text-4xl mt-3 font-bold ${horasTrabalhadas >= 8 ? "text-green-600" : "text-pink-600"}`}>{isNaN(horasTrabalhadas) ? 0 : horasTrabalhadas} horas</p>
                </div>
              </div>
            </div>

            <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
              <div action="" class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="input1">Horário de entrada</label>
                    <InputMask mask="99:99" id="input1" name="input1" onChange={value => setEntrada(value.target.value)} class="w-full p-3 text-sm border rounded-lg" placeholder="Horário de entrada" type="text" />
                  </div>

                  <div>
                    <label class="sr-only" for="input2">Entrada de intervalo</label>
                    <InputMask mask="99:99" id="input2" name="input2" onChange={value => setIntervalo(value.target.value)} placeholder="Entrada de intervalo" class="w-full p-3 text-sm border rounded-lg" type="text" />
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">Horário de saída</label>
                    <InputMask mask="99:99" id="input4" placeholder="Horário de saída" onChange={value => setSaida(value.target.value)} class="w-full p-3 text-sm border rounded-lg" type="text" />
                  </div>

                  <div>
                    <label class="sr-only" for="phone">Volta de intervalo</label>
                    <InputMask mask="99:99" id="input3" placeholder="Volta de intervalo" onChange={value => setRetorno(value.target.value)} class="w-full p-3 text-sm border rounded-lg" type="text" />
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <textarea
                    class="w-full p-3 text-sm border rounded-lg"
                    placeholder="Clentes atendidos"
                    rows="2"
                    id="input5"
                  ></textarea>

                  <textarea
                    class="w-full p-3 text-sm border rounded-lg"
                    placeholder="Projetos realizados"
                    rows="2"
                    id="input6"
                  ></textarea>
                </div>

                <div>
                  <label class="sr-only" for="message">Message</label>
                  <textarea
                    class="w-full p-3 text-sm border rounded-lg"
                    placeholder="Necessita de algo da equipe?"
                    rows="8"
                    id="input8"
                  ></textarea>
                </div>

                <div class="mt-4">
                  <button
                    onClick={() => insertForm()}
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                  >
                    <span class="font-medium"> Contabilizar horas </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      // <div class="flex min-h-screen bg-indigo-700 items-center justify-center">
      // <div id="mensagem" style={{display:'none'}} class="flex items-center fixed top-0 bg-green-500 text-white text-sm font-bold px-4 py-3" role="alert">
      //       <p>Formulário enviado</p>
      // </div>
      //   <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
      //     <div class="flex justify-center py-4">
      //       <div class="flex bg-gray-800 rounded-full md:p-4 p-2 border-2 border-gray-300">
      //         <img src={logo} className="w-8 h-8" alt="" />
      //       </div>
      //     </div>

      //     <div class="flex justify-center">
      //       <div class="flex">
      //         <h1 class="text-gray-600 font-bold md:text-2xl text-xl">I'mLabs Form</h1>
      //       </div>
      //     </div>

      //     <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      //       <div class="grid grid-cols-1">
      //         <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Horário de Entrada</label>
      //         <InputMask mask="99:99" id="input1" class="h-12 py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
      //       </div>
      //       <div class="grid grid-cols-1">
      //         <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Saída para Intervalo</label>
      //         <InputMask mask="99:99" id="input2" class="h-12 py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
      //       </div>
      //     </div>

      //     <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      //       <div class="grid grid-cols-1">
      //         <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Retorno do Intervalo</label>
      //         <InputMask mask="99:99" id="input3" class="h-12 py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
      //       </div>
      //       <div class="grid grid-cols-1">
      //         <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Horário de Saída</label>
      //         <InputMask mask="99:99" id="input4" class="h-12 py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
      //       </div>
      //     </div>

      //     <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      //       <div class="grid grid-cols-1">
      //         <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Cliente(s) atendidos</label>
      //         <textarea id="input5" class="h-16 py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
      //       </div>
      //       <div class="grid grid-cols-1">
      //         <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Projeto(s) realizados</label>
      //         <textarea id="input6" class="h-16 py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
      //       </div>
      //     </div>

      //     <div class="grid grid-cols-1 mt-5 mx-7">
      //       <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Horas corridas? (Número de horas trabalhadas no dia)</label>
      //       <input id="input7" onClick={() => calcHours()} class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" readonly/>
      //     </div>

      //     <div class="grid grid-cols-1 mt-5 mx-7">
      //       <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Necessita de alguma coisa do resto da equipe?</label>
      //       <textarea id="input8" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text"  />
      //     </div>


      //     <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
      //       <button onClick={() => goBack()} class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Sair</button>
      //       <button onClick={() => insertForm()} class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Enviar</button>
      //     </div>

      //   </div>
      // </div>
    )
  }
}

export default PJ;