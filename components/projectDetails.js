import laptop from "../images/laptop.webp"
import laptop2 from "../images/laptop2.jpg"


const list = [
    {
        project: "Weather app",
        description: "A React-based app that provides a weather forecast location data based on user input.",
        sourceCode: "https://github.com/DanielCW7/weather-app-v1/",
        demo: "https://danielcw7.github.io/weather-app-v1/",
        thumbnail: null,
        badges: [ "React", "JS", "HTML/CSS", "Tailwind CSS"]
    },
    {
        project: "Sorting simulator",
        description: "This application takes pre-defined sets of data and sorts them from highest to lowest using the \"bubble sort\" method.",
        sourceCode: "https://github.com/DanielCW7/sorter/",
        demo: "https://danielcw7.github.io/sorter/",
        thumbnail: laptop.src,
        badges: [ "React", "JS", "HTML/CSS"]
    },
    {
        project: "Github finder",
        description: "A React-based app that is designed to search for other users and their profile information on Github.",
        sourceCode: "https://github.com/DanielCW7/github_finder/",
        demo: "https://danielcw7.github.io/github_finder/",
        thumbnail: laptop2.src,
        badges: [ "React", "JS", "HTML/CSS", "REST API"]
    },
    {
        project: "Todo app",
        description: "A simple todo app built with React that saves todos in the current browser's local storage.",
        sourceCode: "https://github.com/DanielCW7/todo/",
        demo: "https://danielcw7.github.io/todo/",
        thumbnail: laptop2.src,
        badges: [ "React", "JS", "HTML/CSS"]
    },
    {
        project: "Photo gallery",
        description: "This app allows a user to search through an array of photos using array iteration methods",
        sourceCode: "https://github.com/DanielCW7/gallery/",
        demo: "https://danielcw7.github.io/gallery/",
        thumbnail: laptop2.src,
        badges: [ "JS", "HTML/CSS"]
    },
    {
        project: "Concrete calculator",
        description: "This app calculates how much concrete someone would need for their project based on provided dimensions.",
        sourceCode: "https://github.com/DanielCW7/yield_calculator/",
        demo: "https://danielcw7.github.io/yield_calculator/",
        thumbnail: laptop2.src,
        badges: [ "JS", "HTML/CSS"]
    },
    {
        project: "Word game",
        description: "A hangman-style game of guessing popular words and phrases.",
        sourceCode: "https://github.com/DanielCW7/gameshow/",
        demo: "https://danielcw7.github.io/gameshow/",
        thumbnail: laptop2.src,
        badges: [ "JS", "HTML/CSS"]
    },
    {
        project: "Tic tac toe",
        description: "A simple game of tictactoe utilizing JQuery.",
        sourceCode: "https://github.com/DanielCW7/tictactoe/",
        demo: "https://danielcw7.github.io/tictactoe/",
        thumbnail: laptop2.src,
        badges: [ "JS", "JQuery", "HTML/CSS" ]
    },
    {
        project: "Employee directory",
        description: "Opening this app fetches randomly generated employee data from an API.",
        sourceCode: "https://github.com/DanielCW7/directory/",
        demo: "https://danielcw7.github.io/directory/",
        thumbnail: laptop2.src,
        badges: [ "JS", "HTML/CSS"]
    }
]

export default list