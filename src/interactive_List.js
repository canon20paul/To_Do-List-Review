export  class Interaction  {
    static updateComplete(index){
        const checkA = JSON.parse(localStorage.getItem('coward')) || [];
         if(checkA[index].completed=== false){
            checkA[index].completed = true;
        } else {
            checkA[index].completed = false;
        }
        localStorage.setItem('coward', JSON.stringify(checkA));
    }
    static deleteComplete( ){
        const checkA = JSON.parse(localStorage.getItem('coward')) || []; 
        const taskCompleted = true
        const filteredItems = checkA.filter(task => task.completed!== taskCompleted)
        localStorage.setItem('coward', JSON.stringify(filteredItems));
    }
}