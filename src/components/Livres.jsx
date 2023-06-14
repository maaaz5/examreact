import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToPanier, removeFromPanier } from "../redux/panier/panierAction";

function Livres() {
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();

  const panier = useSelector((state) => state.panier);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));

    console.log(panier);
  }, [panier]);

  return (
    <div>
      <h1>Livres</h1>

      <br />
      {posts.map((post, index) => {
        return (
          <div key={post.id}>
            <div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
            <button onClick={() => dispatch(addToPanier(post))}>
              ADD TO Panier
            </button>
            <button onClick={() => dispatch(removeFromPanier(post.id))}>
              REMOVE FROM Panier
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default Livres;
