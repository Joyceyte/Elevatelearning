import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import IBPage from "./ibenglish/IbenglishPage";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {
  return (<Router><Theme><div><NavigationMenu/></div></Theme></Router>
  );
}

export default App;
