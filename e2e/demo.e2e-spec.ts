import { AppPage } from './app.po';
import { DemoPage } from './demo.po';

describe('protractor-test Demo', () => {
    let appPage: AppPage;
    let demoPage: DemoPage;

    beforeEach(() => {
        appPage = new AppPage();
        demoPage = new DemoPage();
    });

    it('sholud display title', () => {
        appPage.navigateTo();
        expect(demoPage.getParagraphTitleText()).toEqual('Protractor Test');
    });

    it('todo list가 화면에 나타나야 한다.', () => {
        expect(demoPage.getAllTodoList().count()).toEqual(2);
    });

    it('add button 클릭 시 새로운 Todo가 추가되어야 한다.', () => {
        demoPage.getAllTodoList().count().then(beforeCount => {
            demoPage.addNewTodo();
            demoPage.getAllTodoList().count().then(count => {
                expect(count).toEqual(beforeCount + 1);
            });
        });
    });

    it('delete button 클릭 시 Todo가 삭제되어야 한다.', () => {
        demoPage.getAllTodoList().count().then(beforeCount => {
            demoPage.deleteFirstTodo();
            demoPage.getAllTodoList().count().then(count => {
                expect(count).toEqual(beforeCount - 1);
            });
        });
    });

    it('change button 클릭 시 complete 정보가 변경되어야 한다.', () => {
        const beforeTodo = demoPage.getAllTodoList().first().getCssValue('color');
        demoPage.changeFirstTodoComplete();
        expect(demoPage.getAllTodoList().first().getCssValue('color')).not.toEqual(beforeTodo);
    });
});
