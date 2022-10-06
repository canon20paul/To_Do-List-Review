import { TaskList } from './TasklistFile.js';

describe('ADD TASK', () => {
    test('ADD TAKS', () => {
        TaskList.addTask('Football Football');
        TaskList.addTask('Football Football');
        TaskList.addTask('Football Football');
        expect(TaskList.taskArray.length).toBeTruthy(3);
    });
    test('ADD TAKS', () => {
        TaskList.addTask('Football Football');
        TaskList.addTask('Football Football');
        TaskList.addTask('Football Football');
        expect(TaskList.taskArray.length).toBeTruthy(3);
    });
});