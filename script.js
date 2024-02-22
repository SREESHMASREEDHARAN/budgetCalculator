function register(){
        const register={
           username:uname.value,
           email:email.value,
           password:passwd.value,
        }
        if(register.username==''||register.email==''||register.password==''){
           alert("Please fill all the data")
        }
        else{
           if(register.username in localStorage){
               alert("User already exist")
            }
            else{
               localStorage.setItem(register.username,JSON.stringify(register))
               
               alert("User Added Succesfully")
              document.getElementById("myform").reset()
              window.location.href="./index.html"
               
            }
       
        }
        
   
} 

// function register(){
//     email=document.getElementById("email").value
//     uname=document.getElementById("uname").value
//     passwd=document.getElementById("passwd").value
//     console.log(email);
//     if(email=='' || uname=='' || passwd==''){
//         alert("Enter All Fields")
//     }
//     else{
//         if(email in localStorage){
//             alert("User email Already registered")
//         }
//         else{
//             const userobj={
//                     uname:uname,
//                     passwd:passwd,
//                     email:email,
//                     income:0,
//                     expense:0,
//                     incomeArray:[],
//                     expenseArray:[]

//             }
//             localStorage.setItem(uname,JSON.stringify(userobj))
//             alert("User Registered Successfully")
//             let modal=document.getElementById("exampleModal")
//             window.location='./index.html';

//         }
//     }
// }

// // login
// function login(event){
//     event.preventDefault();
//     let username=document.getElementById("loginUsername").value
//     let password=document.getElementById("loginPassword").value

//     if(loginUsername=='' || loginPassword==''){
//         alert("Enter all fields")
//     }
//     else{
//         if(username in localStorage){
            
//             let newobj=JSON.parse(localStorage.getItem(username));
//             console.log(newobj);
//             if(password== newobj.passwd){
//                 localStorage.setItem('loggedobj',JSON.stringify(newobj))
//                 localStorage.setItem('loggedkey',username)
//                 window.location='./home.html'
//             }
//             else{
//                 alert("Wrong Password: login failed")
//                 document.getElementById("formlogin").reset()
//             }
            

//         }
//         else{
//             alert("User Does not exist, Please register")
//         }
//     }
// }




// var user = {
//     username: username,
//     password: password
// };

    function log(){
        var loginUsername = document.getElementById('loginUsername').value;
            var loginPassword = document.getElementById('loginPassword').value;

            // Retrieve the user object from local storage
            var storedUser = localStorage.getItem(loginUsername);

            // Check if the username exists and the password matches
            if (storedUser) {
                var user = JSON.parse(storedUser);
                if (user.password === loginPassword) {
                    
                    window.location="./home.html"
                    alert("Login Successful")
                } else {
                    alert('Invalid password. Please try again.');
                }
            } else {
                alert('Invalid username. Please try again.');
            }
    }

   //deposite
   let balance = 0;
   let amnt = 0;
   
   let ttlbalance = 0;

   function deposite(){
    amnt=deposite_amount.value;
    amnt=Math.floor(amnt);
    balance+=amnt;
    if(amnt<=0){
        alert("Value Cannot be empty")
       }
       else{
        alert("Amount added Successfully")
        document.getElementById("balance_amount").innerHTML=`<div class="text-light text-center p-10" style="font-weight:500;">Total Balanec is ${balance}</div>`;
       }
       
   }

function withdraw(){
    amnt=withdraw_amount.value;
    amnt=Math.floor(amnt);
    balance-=amnt;
    if(amnt>balance){
        alert("Insufficiant Fund")
       }
       else{
        alert("Expense added Successfully")
        document.getElementById("expns_amount").innerHTML=`<div class="text-light text-center p-10" style="font-weight:500;">Total Balanec is ${balance}</div>`;
       }
}
    

function logout(){
    window.location="./index.html"
}