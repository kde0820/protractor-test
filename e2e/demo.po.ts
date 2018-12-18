import { by, element } from 'protractor';

export class DemoPage {
    getParagraphTitleText() {
        return element(by.css('app-demo h1')).getText();
    }

    addNewTodo() {
        element(by.css('input')).sendKeys('new Todo');
        element(by.buttonText('Add Todo')).click();
    }

    deleteFirstTodo() {
        element.all(by.buttonText('Delete Todo')).first().click();
    }

    changeFirstTodoComplete() {
        element.all(by.buttonText('Change Complete')).first().click();
    }

    getAllTodoList() {
        return element.all(by.className('todo-item'));
    }
}
