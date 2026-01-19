document.addEventListener('DOMContentLoaded', function () {
    const getGitHubProjects = async () => {
        try {
            const response = await fetch('https://api.github.com/users/Duran24062005/repos');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const projects = await response.json();
            console.log(projects);
            return projects;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            return [];
        }
    };

    const displayProjects = async () => {
        const projects = await getGitHubProjects();
        const projectsContainer = document.getElementById('projects-container');

        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');

            projectElement.innerHTML = `
                <h3><a href="${project.html_url}" target="_blank">${project.name}</a></h3>
                <p>${project.description || 'No description available.'}</p>
            `;

            projectsContainer.appendChild(projectElement);
        });
    };

    displayProjects();
});