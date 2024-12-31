import Judul from "./componentPaksi/JudulPaksi";
import IsiPaksi from "./componentPaksi/IsiPaksi";
import Button from "./componentLamsi/Button";
import "./componentPaksi/paksiStyle.css";


function Paksi() {
  return (
    <>
      <div className="containerLamsi">
        <Judul></Judul>
        <IsiPaksi></IsiPaksi>
        <Button></Button>
      </div>
    </>
  );
}

export default Paksi;
