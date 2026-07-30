function ProgressPanel({
  step,
  comparisons,
  swaps,
  status,
}) {
  return (
    <div
      style={{
        borderTop: "1px solid #ccc",
        paddingTop: "20px",
        marginTop: "20px",
      }}
    >
      <p>
        <strong>Step:</strong> {step}
      </p>

      <p>
        <strong>Comparisons:</strong> {comparisons}
      </p>

      <p>
        <strong>Swaps:</strong> {swaps}
      </p>

      <p>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
}

export default ProgressPanel;