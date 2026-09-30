import { UserDAO } from "./UserDAO";

const userDAO = new UserDAO();

for(let i = 0; i=5 ;i++){

}
const users = userDAO.Findall()

users.forEach(user =>{
    console.log(`STD-ID: ${user.getid} STD-Nmae: ${user.getName} STD-Mail: ${user.getmail} `)
});