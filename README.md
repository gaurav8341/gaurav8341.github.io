# Portfolio-blogs

This project is a personal website built using React and deployed on GitHub Pages. The website features a responsive design, ensuring a seamless experience across different devices. It includes several key sections such as profile, featured projects, blog posts, and skills. Visit the Website at [https://gauravrajput.vercel.app/](https://gauravrajput.vercel.app/)

## Key Technical Features:

1. **React**: Utilizes React for building a dynamic and interactive user interface.
2. **React Router**: Implements client-side routing for seamless navigation between different sections of the website.
3. **Axios**: Used for making HTTP requests to fetch data for projects, blogs, and skills.
4. **CSS Modules**: Employs CSS modules for scoped and maintainable styling.
5. **Responsive Design**: Ensures the website is fully responsive and works well on various screen sizes.
6. **Content Security Policy (CSP)**: Configured CSP to enhance security by specifying allowed sources for content.
8. **404 Redirect**: Includes a custom 404.html to handle client-side routing on GitHub Pages.
9. **Configurable Content**: We are fetching the content from other open githhub repos. Adding content to this website becomes way easy without any downtime in production.

The website is designed to be user-friendly and visually appealing, providing a comprehensive view of the user's professional journey and interests.


## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd frontend
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Build the frontend:
    ```sh
    npm run build
    ```


## Deployment

The project is deployed at [https://gauravrajput.vercel.app/](https://gauravrajput.vercel.app/).



## URL Configuration

The content for the website is fetched from the following URLs:

- **blogsJsonPath**: [Blogs JSON](https://raw.githubusercontent.com/gaurav8341/LearnWithMe/refs/heads/main/blogs.json)
- **featuredBlogsPath**: [Featured Blogs JSON](https://raw.githubusercontent.com/gaurav8341/gaurav8341/refs/heads/master/featuredBlogs.json)
- **profilePageUrl**: [Profile Page HTML](https://raw.githubusercontent.com/gaurav8341/gaurav8341/refs/heads/master/index.html)
- **featuredProjectsPath**: [Featured Projects JSON](https://raw.githubusercontent.com/gaurav8341/gaurav8341/refs/heads/master/featuredProjects.json)
- **skillsJsonPath**: [Skills JSON](https://raw.githubusercontent.com/gaurav8341/gaurav8341/refs/heads/master/skills.json)


#### TODO:
1. Add Active variable to content data JSONs:
    1. Skills
    2. Projects 
    3. Blogs
    4. LearnBlogs
2. Add 2 sections in Blogs:
    1. Learning -- Low effort content
    2. Blogs -- High effort content
3. Domain name

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
