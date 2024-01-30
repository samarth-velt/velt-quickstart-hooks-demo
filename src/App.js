import { VeltProvider, VeltComments, VeltPresence } from '@veltdev/react';
import YourAuthComponent from './YourAuthComponent';
import YourDocument from './YourDocument';
import "./App.css";


export default function App() {

  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <VeltComments/>
      <VeltPresence/>
      <YourAuthComponent/>
      <YourDocument/>
    </VeltProvider>
  );
}
