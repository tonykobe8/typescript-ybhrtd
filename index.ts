// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML=''; 
 
var stu= [
  {sname:'kobe',name:'tony',age:20 ,grade:'grade1'},
  {sname:'matome',name:'matomeh',age:40,grade:'grade2'}];
display (stu);
function display(stu) {
  if (stu.age <=30){
    return (stu.age ='younger');
  }else {
    return (stu.age ='olderst');
  }
}
console.log(stu[1].sname+ " " +stu[1].name+ " "+stu.age)