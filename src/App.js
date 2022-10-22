import React, {useMemo, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/modal/Modal";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'bb', body: 'desc1'},
    {id: 2, title: 'aa', body: 'desc2'},
    {id: 3, title: 'gg', body: 'desc3'},
    {id: 4, title: 'ww', body: 'desc4'}
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortedPost = useMemo(() => {
    console.log('ggg')
    if (filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSerachedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPost])

  return (
    <div className="App">
      <Button style = {{marginTop: '30px'}} onClick = {() => setModal(true)}>
        Создать пользователя
      </Button>
      <Modal visible={modal} setVisible = {setModal}>
        <PostForm create = {createPost}/>
      </Modal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter = {filter}
        setFilter = {setFilter}
      />
      <PostList remove = {removePost} posts = {sortedAndSerachedPosts}/>
    </div>
  );
}

export default App;