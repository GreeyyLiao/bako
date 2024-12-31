import "./componentLamsi/lamsiStyle.css";
import Judul from "./componentLamsi/JudulLamsi.jsx";
import IsiLamsi from "./componentLamsi/IsiLamsi.jsx";
import ButtonLamsi from "./componentLamsi/Button.jsx";

function Lamsi() {
  return (
    <>
      <div className="containerLamsi">
        <Judul></Judul>
        <IsiLamsi></IsiLamsi>
        <ButtonLamsi></ButtonLamsi>
      </div>
    </>
  );
}

export default Lamsi;
