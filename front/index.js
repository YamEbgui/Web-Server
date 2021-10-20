//dom elements 
const confirmBtn = document.getElementById("confirmBtn");
const nameIn = document.getElementById("name");
const ageIn = document.getElementById("age");
const abillityIn = document.getElementById("abillity");


// get input info and validate
const validateInfo = () => {
    // show loader
    if(nameIn.value === '' || ageIn.value === '' || abillityIn === '' ){
        // stop loader
        alert("Make Sure To Fill In All The Fields")
        return;
    }
    checkData();
}

//send post reqest to the server, get data, and show it. 
const checkData = async () => {
    try {
        const data = await axios.post("http://localhost:3000" , `{"nameValue":"${nameIn.value}" , "ageValue":"${ageIn.value}" ,"abilityValue":"${abillityIn.value}"}`);
        if(data.data){
          showSuccess();//show succes on page
        }else{
          showFailiure();//show fail on page
        }
      } catch (error) {
      }
}
//remove all elements from the body 
const blankDoc =()=>{
  const body = document.body;
  while (body.childNodes.length>0){
    body.removeChild(body.childNodes[0]);
  }
}
//show message of success
const showSuccess= () =>{
  blankDoc();
  const h1= document.createElement("h1");
  const result = document.createTextNode("you passed to the next stage");
  h1.appendChild(result)
  document.body.append(h1);
}
//show message of fail
const showFailiure= () =>{
  blankDoc();
  const h1= document.createElement("h1");
  const result = document.createTextNode("you failed");
  h1.appendChild(result)
  document.body.append(h1);
}
//make button functionallity 
confirmBtn.addEventListener("click", (e)=> {
  e.preventDefault();
  validateInfo();
})