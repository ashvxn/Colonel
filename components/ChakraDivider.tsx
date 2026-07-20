import { AshokaChakra } from "./AshokaChakra";

export function ChakraDivider() {
  return (
    <div className="mst-chakra-divider" role="presentation">
      <span className="line" />
      <AshokaChakra size={46} spin title="" />
      <span className="line" />
    </div>
  );
}
