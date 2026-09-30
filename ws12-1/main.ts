import { StudentDAO } from "./StudentDAO";

const studentDAO = new StudentDAO();

studentDAO.insert("684245051", "Megumin", 3.5);
studentDAO.insert("684245052", "Aqua", 3.8);
studentDAO.insert("684245053", "Kazuma", 3.5);
studentDAO.insert("684245054", "Darkness", 3.8);

const students = studentDAO.findAll();
let honor : string;
students.forEach(student => {
    console.log(student.getInfo());
    if(student.isHonors()){
        console.log(`${student.getFullName()} เกียรตินิยม.`);
    } else honor = "";
    console.log(`${student.getid()} ${student.getFullName()} ${student.getGPA()}`);
});
