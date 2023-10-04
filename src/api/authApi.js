async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
  }

  export async function signup(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://127.0.0.1:8000/api/account/signup",payload)
    return body
  }
  
  export async function login(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://127.0.0.1:8000/api/account/get-token", payload)
    return body.token
  }

  export async function getCar(token) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch("http://127.0.0.1:8000/api/cars/all/", payload)
    return body
  }

  export const getUserEndpoint = (carID) => `http://127.0.0.1:8000/api/cars/all/${carID}/`

  export async function getModel(token) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch("http://127.0.0.1:8000/api/cars/models/", payload)
    return body
  }