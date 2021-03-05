import axios from "axios"

export async function getData(id, target) {
  console.log("GetData")
  axios
    .get("https://fitvueapi.azurewebsites.net/" + id)
    .then(response => {
      //this.usersList = [...response.data]
      //localStorage.setItem("storedData", dane)
      //this.SAVE_DATA("this.usersList")
      let ram = "123"
      //console.log(ram)
      return ram
    })
    .catch(e => {
      console.log(e)
    })
}
