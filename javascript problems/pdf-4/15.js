const team = {
    Alice: { role: 'Developer', age: 25 },
    Bob: { role: 'Manager', age: 30 },
    Charlie: { role: 'Tester', age: 28 },
};
const key = 'Alice';


for (let [teamate, value] of Object.entries(team)) {

    if(teamate === key){
        console.log(value.role);

    }
        
  }


const name1 = "ALICE";

const name2 = "ALice";

if(name1.toLowerCase() == name2.toLowerCase()){
console.log("both are same")

}else{
    console.log("both are not same");
    
}