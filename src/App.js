import "./styles.css";
import PostCard from "./system-design/PostCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import List from "./system-design/pagination/List";
export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      {/* <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <PostCard postId="1" />
        </div>
      </QueryClientProvider> */}
      {/* <ColorPicker /> */}
      <List />
    </>
  );
}
