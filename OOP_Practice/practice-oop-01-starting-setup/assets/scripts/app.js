class Tooltip {

}

class ProjectItem {

}

class ProjectList {

    constructor(type) {
        // Get all the related items
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        console.log(projectItems);
    }
}

class App {
    static init() {
        // Create the two project type
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    }
}

App.init();