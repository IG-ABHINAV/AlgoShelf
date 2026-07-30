import { algorithms } from "../data/algorithms";

export function getAlgorithm(id) {
  return algorithms.find((algorithm) => algorithm.id === id);
}