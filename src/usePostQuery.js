import { queryOptions, useQuery } from "@tanstack/react-query";

export default function postQueryOptions(postId) {
  return queryOptions({
    queryKey: ["posts", postId],
    queryFn: () => {
      console.log("queryFn called");
      return {
        id: postId,
        title: "Hello world",
        body: "This is test post",
      };
    },
  });
}
