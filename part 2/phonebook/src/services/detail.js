import axios from "axios";

const baseUrl='http://localhost:3001/persons';

const getAll =()=>{
    const request =axios.get(baseUrl)
    return request.then(response=>response.data)
}
const create = newpersonName => {
    const request = axios.post(baseUrl, newpersonName)
    return request.then(response => response.data)
  }

  const remove =id=>{
        const request=axios.delete(`${baseUrl}/${id}`)
        return request.then(response=>response.data)
  }

    const change =(id,p) =>{
        const request =axios.put(`${baseUrl}/${id}`,p)
        return request.then(response=>response.data);
    }
  export default {create,getAll,remove,change}