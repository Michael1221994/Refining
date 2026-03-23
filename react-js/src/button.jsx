

function Button(){
    /*let count =0; 
    const handleClick=(name) =>{
        if(count<3){
            count++;
            console.log(`You've clicked me ${count} times`);
        }
        else {
            console.log(`${name} You've clicked me too much`);
        }
    };
    //const handleClick2 = (name) =>console.log(`Hello ${name}`);
return(
    <button onClick={() =>handleClick("Mike")}>Click me 😂</button>);
}*/
const handleClick = (e) => e.target.textContent = "Ouch 😒";
return(
    <button onDoubleClick={(e) =>  handleClick(e)}>Click me 😂</button>
);

}

export default Button;