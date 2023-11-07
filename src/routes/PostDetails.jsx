import { useLoaderData, Link } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  try {
    const response = await fetch(
      "http://localhost:8080/posts/" + params.postId
    );

    if (!response.ok) {
      // Handle non-successful response (e.g., 404 Not Found)
      throw new Error("Request failed with status: " + response.status);
    }

    const resData = await response.json();
    return resData.post;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to indicate a problem with the loader
  }
}
