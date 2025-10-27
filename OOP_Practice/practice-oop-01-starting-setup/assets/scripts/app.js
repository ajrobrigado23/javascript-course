class Tooltip {

}

class ProjectItem {

    constructor(id) {
        // Stored the id (as an instance property)
        this.id = id;
        this.connectedElement = document.getElementById(id);
        this.connectDragTarget = this.connectedElement.querySelector('h2');
    }

    connectMoreInfoButton() {

    }

    connectSwitchButton() {
        // Get the element by id
        const projectItemElement = document.getElementById(this.id);
        // Select the last button
        const switchButton = projectItemElement.querySelector('button:last-of-type');
        // Switch the list and we gonna use the callback function for that.
        switchButton.addEventListener('click', () => {

        });

    }

}

class ProjectList {
    // Store all the projects
    projects = [];

    constructor(type) {
        // Get all the related items
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        // Loop through them and store in our array (instances of project items)
        for (const projectItem of projectItems) {
            // Stored the project item in our array using the project item id
            this.projects.push(new ProjectItem(projectItem.id));
        }
        console.log(this.projects);
    }

    addProject(project) {
        // Add the project to the array
        this.projects.push(project);
        // Switch the element away (the project)
    }

    // Switch the element away (the project)
    switchProject(projectId) {
        // Remove to the project array
        const project = this.projects.findIndex(project => project.id === projectId);
        this.projects.splice(project, 1);
        // Alternative (removing an item)
        this.projects = this.projects.filter(project => project.id !== projectId);
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