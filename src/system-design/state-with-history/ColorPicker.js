import useStateWithHistory from "./useStateWithHistory";

export default function ColorPicker() {
  const [color, push, undo, redo, reset] = useStateWithHistory(
    "#ffffff",
    10,
    "color-history"
  );

  return (
    <div style={{ ...styles.container, backgroundColor: color }}>
      <h1>🎨 Color Picker with Undo/Redo</h1>

      <input
        type="color"
        value={color}
        onChange={(e) => push(e.target.value)}
        style={styles.colorPicker}
      />

      <div style={styles.buttons}>
        <button onClick={undo}>↩️ Undo</button>
        <button onClick={redo}>↪️ Redo</button>
        <button onClick={reset}>🔄 Reset</button>
      </div>

      <div style={{ marginTop: 20, fontSize: 18 }}>
        Current: <code>{color}</code>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    transition: "background-color 0.3s ease",
    color: "#333",
    textAlign: "center",
    paddingTop: "4rem",
  },
  colorPicker: {
    width: 100,
    height: 50,
    border: "none",
    marginBottom: 20,
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },
};
