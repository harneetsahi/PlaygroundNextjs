import axios from "axios";

export default async function BlogPage({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const { postId } = await params; // name postId has to be the same as the folder name. throws warning without await because params is a promise now.

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return (
    <div>
      <h2>Blog post {postId}</h2>
      <p>{response.data.title}</p>
    </div>
  );
}
