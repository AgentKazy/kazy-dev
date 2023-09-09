// Assets
import pdfCV from "./pdf/CV_BRUNO.pdf";

export default function Cv() {
  return (
    <div>
      <object width="100%" height="100%" data={pdfCV} type="application/pdf">
        {" "}
      </object>
    </div>
  );
}
