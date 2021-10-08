export default function uuid() {
  return Math.round(
    Math.pow(32, 7) - Math.random() * Math.pow(32, 6),
  ).toString();
}