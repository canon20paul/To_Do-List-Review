import { update } from "lodash";
export  class TaskList {
     constructor (){
       this.taskArray = JSON.parse(localStorage.getItem('coward')) || [];
            }
static addTask(desc){
        let index = this.taskArray.length ;
        let task = {
            description: desc,
            completed: false,
            index: index
        }
        this.taskArray.push(task);
        localStorage.setItem('coward', JSON.stringify(this.taskArray));
    }
    static delete (index) {
        this.taskArray.splice(index, 1);
        for (let i = 0; i < this.taskArray.length; i = 1 + i) {
            this.taskArray[i].index = i ;
        }
        localStorage.setItem('coward', JSON.stringify(this.taskArray));
  }
}