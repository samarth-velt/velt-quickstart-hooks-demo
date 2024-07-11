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
    <VeltProvider
      apiKey="eVAEQFPaKsqUie40OhtK"
      // config={{
      //   // userIdAllowList: ['abcd'], // To allow specific users only
      //   urlAllowList: [], // To allow velt in specific screens only
      //   version: "2.0.1", //Staging
      //   // version: '2.0.6', //Dev
      //   staging: true,
      //   // version: 'latest',
      //   // develop: true,
      // }}
    >
      <VeltCommentsSidebar pageMode={true} />
      <VeltComments />
      <YourAuthComponent />
      <YourDocument />
    </VeltProvider>
  );
}
