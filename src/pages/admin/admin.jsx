import { Table } from "../../components/TableScrum"
import { Link } from "react-router-dom"
import Axios from 'axios'

function Admin() {

    var url_string = window.location.href
    var url = new URL(url_string);
    var token = url.searchParams.get("token")
    url['search'] = atob(token)
    var id = url.searchParams.get("id")


  
    if (id == null){
      return(<h1>Permission Denied</h1>)
    }else{
  return (
    <div className="TableScreen bg-indigo-700 min-h-screen">
      <div className="flex justify-center flex-col">
      {/* Header */}
        <header className='flex items-center justify-between px-4 py-2 bg-indigo-600 drop-shadow-lg w-full text-1xl font-semibold'>
          <div className="text-stone-200">
            <h1>Administrador</h1>
          </div>
          <button className="logout rounded bg-red-500 hover:bg-red-600 hover:text-slate-900 p-1 px-2">
            <Link to={'/'}>Logout</Link >
          </button>
        </header>

        <Table/>
        
      </div>
    </div>
    
  )
}
}

export default Admin
