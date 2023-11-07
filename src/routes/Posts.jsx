import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

function Posts() {
  return (
    <>
      <main>
        <Outlet />
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

// export async function loader() {
//   const response = await fetch("http://localhost:8080/posts");
//   const resData = await response.json();
//   return resData.posts;
// }

export async function loader() {
  try {
    const response = await fetch("http://localhost:8080/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const resData = await response.json();
    return resData.posts;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
