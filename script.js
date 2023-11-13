
const drop = document.querySelector("#dropdownReise");
const image = document.querySelector("#imageCity");
drop.addEventListener("change", () => {
    



switch(drop.value){
    case `destinationOne`:
        image.src = `https://images.unsplash.com/photo-1539424675410-513ddd709ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBhcmlzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60`
    break;

    case `destinationTwo`:
        image.src = `https://images.unsplash.com/photo-1537799943037-f5da89a65689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1586&q=80`
        break;

    case `destinationThree`: 
        image.src = `https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80`
    break;
        
    case `destinationFour`:
        image.src = `https://images.unsplash.com/photo-1604403965559-5b51daea0668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80`
    break;

    case `destinationFive`:
        image.src =`https://images.unsplash.com/photo-1598780057934-1df44d2fa63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80`
    break;

    
}})
