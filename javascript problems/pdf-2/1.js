function canVote(age){
    if(age >= 18){
        return "Eligible to vote";
    }
    else{
        return "Not eligible to vote"
    }
}

console.log(canVote(20));
console.log(canVote(15));

