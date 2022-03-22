import "../components/App.css";
import Button from "../components/Button";
import Weightlift from "../images/weightlift.png";


export default function Front() {
  return (
    <div>
    <h1 className="title is-size-2 has-text-black">
      <u>🏋️.toStrong</u>
    </h1>
    <p className="has-text-black">
      "The <strong className="has-text-black">toStrong()</strong> method takes
      an object and returns a strong version of the object"
    </p>
    <div />
    <img src={Weightlift} />
    <div />
    <div>
      <Button word="Sign Up" path="/new"/>
      <Button word="Sign in" path="/signin"/>
    </div>
  </div>
  )
}

