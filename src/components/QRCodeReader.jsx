import { Scanner } from "@yudiel/react-qr-scanner";

function QRCodeReader({ onSucess, onError }) {
  return (
    <div className="mx-auto size-full overflow-hidden rounded-xl">
      <Scanner
        onScan={onSucess}
        onError={onError}
        formats={["qr_code"]}
        components={{ audio: false, finder: false }}
        constraints={{ facingMode: "environment", aspectRatio: 1 }}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="size-full rounded-2xl border-2 border-dashed border-primary" />
      </div>
    </div>
  );
}

export default QRCodeReader;
