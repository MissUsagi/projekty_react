const names = ['Maximilian', 'Sylvia'];

function Post() {
   const chosenName = Math.random() > 0.5 ? names[0] : names[1]
   return <div>
      <p>{chosenName}</p>
      <p>Pierwszy mini post</p>
   </div>
}

export default Post;