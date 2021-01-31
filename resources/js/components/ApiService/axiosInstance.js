import axios from 'axios'
const instance = axios.create({
  baseURL: '/api'
});
// instance.interceptors.response.use(
//   response=>response,
//   error=>
//   {
//     if (error.response.status===401){
//       router.push({name:'home'})
//     }
//     // if (error.response.status===404){
//     //   console.log(error.response)
//     // }
//
//   }
// )

export default instance
