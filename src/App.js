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
    <VeltProvider apiKey="eVAEQFPaKsqUie40OhtK">
      <VeltCommentsSidebar pageMode={true} />
      <VeltComments />
      <YourAuthComponent />
      <YourDocument />
    </VeltProvider>
  );
}
