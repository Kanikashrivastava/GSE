// root page
import User from "../src/components/user";

class App extends React.Component {
  render() {
    return (
      <div>
        <User basename={process.env.PUBLIC_URL} />
      </div>
    );
  }
}
export default App;
