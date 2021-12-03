import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
import Card from "./components/Card/Card";
import MainTitle from "./components/MainTitle/MainTitle";

function App() {
  const api = [
    {
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1624126289l/58375739.jpg",
      title: "Will",
      author: "Will Smith",
      time: "Coming Nov, 9th, 2021",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/81amdmyfysL.jpg",
      title: "Will",
      author: "Will Smith",
      time: "Coming Nov, 9th, 2021",
    },
    {
      img: "https://cdn.dribbble.com/users/2140475/screenshots/15855865/media/e39e3f72962347b48c74db4e3c57b396.jpg?compress=1&resize=800x600",
      title: "Will",
      author: "Will Smith",
      time: "Coming Nov, 9th, 2021",
    },
    {
      img: "https://cdn.dribbble.com/users/2140475/screenshots/15855865/media/e39e3f72962347b48c74db4e3c57b396.jpg?compress=1&resize=800x600",
      title: "Will",
      author: "Will Smith",
      time: "Coming Nov, 9th, 2021",
    },
    {
      img: "https://cdn.dribbble.com/users/2140475/screenshots/15855865/media/e39e3f72962347b48c74db4e3c57b396.jpg?compress=1&resize=800x600",
      title: "Will",
      author: "Will Smith",
      time: "Coming Nov, 9th, 2021",
    },
    {
      img: "https://cdn.dribbble.com/users/2140475/screenshots/15855865/media/e39e3f72962347b48c74db4e3c57b396.jpg?compress=1&resize=800x600",
      title: "Will",
      author: "Will Smith",
      time: "Coming Nov, 9th, 2021",
    },
    {
      img: "https://cdn.dribbble.com/users/2140475/screenshots/15855865/media/e39e3f72962347b48c74db4e3c57b396.jpg?compress=1&resize=800x600",
      title: "Will",
      author: "Will Smith",
      time: "Coming Nov, 9th, 2021",
    },
    {
      img: "https://cdn.dribbble.com/users/2140475/screenshots/15855865/media/e39e3f72962347b48c74db4e3c57b396.jpg?compress=1&resize=800x600",
      title: "Will",
      author: "Will Smith",
      time: "Coming Nov, 9th, 2021",
    },
  ];
  
  return (
    <div className="App">
      <Nav />
      <MainTitle main_title="Most Anticipated books" />
      <Card props={api}/>
    </div>
  );
}

export default App;
