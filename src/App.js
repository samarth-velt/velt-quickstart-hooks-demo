import {
  VeltProvider,
  VeltComments,
  VeltPresence,
  VeltCommentsSidebar,
} from "@veltdev/react";
import YourAuthComponent from "./YourAuthComponent";
import YourDocument from "./YourDocument";
import "./App.css";

export default function App() {
  return (
    <VeltProvider apiKey="7M3NC9F9k48eU01hxXT9">
      <VeltCommentsSidebar pageMode={true} />
      <VeltComments />
      <YourAuthComponent />
      <YourDocument />
    </VeltProvider>
  );
}
