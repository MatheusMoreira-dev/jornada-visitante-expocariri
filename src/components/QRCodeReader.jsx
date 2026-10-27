import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

function QRCodeReader() {
  const [resultado, setResultado] = useState("");

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-2xl border p-5">
      <div>
        <h2 className="text-xl font-semibold">Ler QR Code</h2>
        <p className="text-sm text-muted-foreground">
          Posicione o código dentro da câmera.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl">
        <Scanner
          onScan={(codes) => {
            if (codes.length > 0) {
              setResultado(codes[0].rawValue);
            }
          }}
          onError={(error) => console.error(error)}
          formats={["qr_code"]}
          components={{ audio: false }}
          constraints={{ facingMode: "environment" }}
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-48 w-48 rounded-2xl border-2 border-primary shadow-[0_0_0_999px_rgba(0,0,0,0.25)]" />
        </div>
      </div>

      {resultado && (
        <div className="break-all rounded-lg bg-muted p-3">
          <p className="mb-1 text-sm font-medium">Conteúdo identificado</p>
          <p className="text-sm">{resultado}</p>
        </div>
      )}
    </div>
  );
}

export default QRCodeReader;
