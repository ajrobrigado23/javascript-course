class Tooltip {

}

class ProjectItem {

    constructor(id, updateProjectLists) {
        // Stored the id (as an instance property)
        this.id = id;
        this.updateProjectListsHandler = updateProjectLists;
        this.connectedElement = document.getElementById(id);
        this.connectDragTarget = this.connectedElement.querySelector('h2');

        this.connectSwitchButton();
    }

    connectMoreInfoButton() {

    }

    connectSwitchButton() {
        // Get the element by id
        const projectItemElement = document.getElementById(this.id);
        // Select the last button
        const switchButton = projectItemElement.querySelector('button:last-of-type');
        // Switch the list and we gonna use the callback function for that.
        switchButton.addEventListener('click', this.updateProjectListsHandler);

    }

}

class ProjectList {
    // Store all the projects
    projects = [];

    constructor(type) {
        this.type = type;
        // Get all the related items
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        // Loop through them and store in our array (instances of project items)
        for (const projectItem of projectItems) {
            // Stored the project item in our array using the project item id
            this.projects.push(
                new ProjectItem(projectItem.id, this.switchProject.bind(this))
            );
        }
        console.log(this.projects);
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject() {
        // Add the project to the array
        // this.projects.push(project);
        // Switch the element away (the project)
        console.log(this);
    }

    // Switch the element away (the project)
    switchProject(projectId) {
        // 1 Option
        // Remove to the project array (find the index first)
        // const project = this.projects.findIndex(project => project.id === projectId);
        // Once you find the index you want to delete use splice to remove it
        // this.projects.splice(project, 1);

        // Switch the element away (the project)
        this.switchHandler(this.projects.find(p => p.id === projectId));

        // 2 Option
        // Alternative (removing an item)
        this.projects = this.projects.filter(project => project.id !== projectId);

    }
}

class App {
    static init() {
        // Create the two project type
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');

        // Set the switch handler function
        activeProjectList.setSwitchHandlerFunction(
            finishedProjectList.addProject.bind(finishedProjectList)
        );

        finishedProjectList.setSwitchHandlerFunction(
            activeProjectList.addProject.bind(activeProjectList)
        );
    }
}

App.init();