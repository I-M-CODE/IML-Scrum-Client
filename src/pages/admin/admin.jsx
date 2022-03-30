import { Link } from "react-router-dom"
import Axios from 'axios'
import NProgress from "nprogress"

import { TableReformed } from "../../components/TableReformed";

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
      <TableReformed/>
    ) 
}
}

export default Admin
