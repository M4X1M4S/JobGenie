import { useEffect } from "react";
interface HereResponse {
  message: string;
}

const App = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/here");
      const data: HereResponse = await response.json();
      console.log(data);
    }
    fetchData();
  }, []);
  return <div>App</div>;
};

export default App;
