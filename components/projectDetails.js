import Auth from "../images/user-auth.png"
import Weather from "../images/Weather2.PNG"
import Finder from "../images/github_finder.png"
import Todo from "../images/Todo2.PNG"
import Gallery from "../images/Gallery.PNG"
import Calc from "../images/Calc2.PNG"
import Game from "../images/Game2.PNG"
import Directory from "../images/Directory.PNG"
import Blog from "../images/blog.png"

const list = [
    {
        project: "User Authenticator",
        description: "Using Auth0 for authentication, this app shows a Github user's projects. As a bonus, it presents a randomly generated character list from Rick and Morty!",
        sourceCode: "https://github.com/DanielCW7/user-authenticator",
        demo: "https://user-authenticator-sigma.vercel.app/",
        thumbnail: Auth.src,
        badges: [ "React", "Material UI", "HTML/CSS/JS", "Tailwind", "REST API"],
    },
    {
        project: "Blog app",
        description: "This blog uses the Sanity CMS and allows me to easily create posts to be displayed on my React front end.",
        sourceCode: "https://github.com/DanielCW7/blog-app",
        demo: "https://daniels-blog.com/",
        thumbnail: Blog.src,
        badges: [ "React", "Next", "HTML/CSS/JS", "Tailwind", "Headless CMS"],
    },
    {
        project: "Weather app",
        description: "A React-based app that provides a weather forecast location data based on user input.",
        sourceCode: "https://github.com/DanielCW7/weather-app-v1/",
        demo: "https://danielcw7.github.io/weather-app-v1/",
        thumbnail: Weather.src,
        badges: [ "React", "HTML/CSS/JS", "Tailwind", "REST API"],
    },
    {
        project: "Github finder",
        description: "A React-based app that is designed to search for other users and their profile information on Github.",
        sourceCode: "https://github.com/DanielCW7/github_finder/",
        demo: "https://danielcw7.github.io/github_finder/",
        thumbnail: Finder.src,
        badges: [ "React", "HTML/CSS/JS", "REST API"]
    },
    {
        project: "Todo app",
        description: "A simple todo app built with React that saves todos in the browser's local storage.",
        sourceCode: "https://github.com/DanielCW7/todo/",
        demo: "https://danielcw7.github.io/todo/",
        thumbnail: Todo.src,
        badges: [ "React", "HTML/CSS/JS"]
    },
    {
        project: "Photo gallery",
        description: "This app allows a user to search through an array of photos using array iteration methods",
        sourceCode: "https://github.com/DanielCW7/gallery/",
        demo: "https://danielcw7.github.io/gallery/",
        thumbnail: Gallery.src,
        badges: ["HTML/CSS/JS"]
    },
    {
        project: "Concrete calculator",
        description: "This app calculates how much concrete someone would need for their project based on provided dimensions.",
        sourceCode: "https://github.com/DanielCW7/yield_calculator/",
        demo: "https://danielcw7.github.io/yield_calculator/",
        thumbnail: Calc.src,
        badges: ["HTML/CSS/JS"]
    },
    {
        project: "Word game",
        description: "A hangman-style game of guessing popular words and phrases.",
        sourceCode: "https://github.com/DanielCW7/gameshow/",
        demo: "https://danielcw7.github.io/gameshow/",
        thumbnail: Game.src,
        badges: ["HTML/CSS/JS"]
    },
    {
        project: "Employee directory",
        description: "Opening this app fetches randomly generated employee data from an API.",
        sourceCode: "https://github.com/DanielCW7/directory/",
        demo: "https://danielcw7.github.io/directory/",
        thumbnail: Directory.src,
        badges: ["HTML/CSS/JS"]
    }
]

export default list