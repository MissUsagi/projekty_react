import { useState } from 'react';
import MainHeader from './components/MainHeader';
import PostsList from './components/PostsList';
function App() {
  const [modalIsVisible, setModalVisibility] = useState(false);

  function showModalHandler() {
    setModalVisibility(true);
  }
  function hideModalHandler() {
    setModalVisibility(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  )
}

export default App;
