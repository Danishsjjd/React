import useCopyToClipboard from "./useCopyToClipboard";

export default function CopyToClipboardComponent() {
  const [copyToClipboard, { success }] = useCopyToClipboard();

  return (
    <div style={{ border: "3px solid black" }}>
      <button onClick={() => copyToClipboard("This was copied")}>
        {success ? "Copied" : "Copy Text"}
      </button>
      <input type="text" />
    </div>
  );
}
