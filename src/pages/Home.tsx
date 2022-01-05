import SiderBar from "../component/SiderBar";
import Statistical from "../component/Statistical";
import '../assets/css/Home.css';

export default function Home(): JSX.Element {
  return (
    <>
      <div className="container">
        <SiderBar />
        <Statistical />
      </div>
    </>
  );
}
