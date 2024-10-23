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
                <img src="http://localhost:3000/api/image/${user.image.filename}" alt="">
            </div>
            <h4>${user.username}</h4>
            <p>${user.email}</p>
        </div>
    `
    
})
document.getElementById('cards').innerHTML=str
    
}
getUsers();

