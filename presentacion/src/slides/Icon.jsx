export function Icon({ name, weight }) {
  return (
    <i
      className={`ph ph-${name}${weight ? ` ph-${weight}` : ""}`}
    ></i>
  );
}