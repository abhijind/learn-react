import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import postQueryOptions from "../hooks/usePostQuery";

export default function PostCard({ postId }) {
  const postQuery = useQuery(postQueryOptions(postId));
  if (postQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (postQuery.isError) {
    return <div>Error: {postQuery.error.message}</div>;
  }

  return (
    <div>
      <PostCardHeader postId={postId} />
      <PostCardBody postId={postId} />
    </div>
  );
}

function PostCardHeader({ postId }) {
  const postQuery = useQuery(postQueryOptions(postId));
  return <h2>{postQuery.data.title}</h2>;
}

function PostCardBody({ postId }) {
  const postQuery = useQuery(postQueryOptions(postId));
  return <div>{postQuery.data.body}</div>;
}
