import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Header from './components/Header';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

const BASE_URL = "https://66ced74d901aab24841fc9e7.mockapi.io/";



function App() {


// запрос на получение конкретного поста

async function getPost(id) {
  try {
    const data = await axios.get(`${BASE_URL}/tasks/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


// создаем ф-ю для поулчения всех постов, которые выводятся на экран 

  async function getAllPosts() {
    try {
      const data = await axios.get(`${BASE_URL}/tasks`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }


// пишем запрос на удаление поста

async function deletePost(id) {
  try {
    const data = await axios.delete(`${BASE_URL}/tasks/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
//  запрос на создание поста
async function createPost(newPost) {
  try {
    const data = await axios.post(`${BASE_URL}/tasks`, newPost);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// запрос на обновление поста

async function updatePost(id) {
  try {
    const data = await axios.put(`${BASE_URL}/tasks/${id}`, {
      completed: false,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  getPost(8);
}, []);



  return (
    <div className="App">
      <Header />
<PostForm />
<PostList />


    </div>
  );
}

export default App;






//  import { useEffect } from "react";
// import "./App.css";
// import axios from "axios";
// const BASE_URL = "https://66ced65d901aab24841fc4b1.mockapi.io";
// function App() {
//   async function getPost(id) {}
//   async function getAllPosts() {
//     try {
//       const data = await axios.get(`${BASE_URL}/tasks`);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   async function deletePost(id) {
//     try {
//       const data = await axios.delete(`${BASE_URL}/tasks/${id}`);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   async function createPost(newPost) {
//     try {
//       const data = await axios.post(`${BASE_URL}/tasks`, newPost);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   async function updatePost(id) {
//     try {
//       const data = await axios.put(`${BASE_URL}/tasks/${id}`, {
//         completed: false,
//       });
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return <div></div>;
// }
// export default App;