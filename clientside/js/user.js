async function getUsers() {
const res=await fetch("http://localhost:3000/api/getusers");
console.log(res);
const users=await res.json();
str=``;
users.map((user)=>{
    console.log(user.image.filename);
    str+=`
     <div class="card">
            <div class="image">
                <img src="" alt="">
            </div>
            <h4>Name</h4>
            <p>email</p>
        </div>
    `
    
})
document.getElementById('cards').innerHTML=str
    
}
getUsers();