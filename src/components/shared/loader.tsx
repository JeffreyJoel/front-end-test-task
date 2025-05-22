interface LoaderProps {
  height?: number;
  width?: number;
}

export default function Loader({ height, width }: LoaderProps) {
  return (
    <div
      className={`animate-spin rounded-full ${height ? `h-${height}` : "h-12"} ${width ? `w-${width}` : "w-12"} border-t-2 border-b-2 border-beezie-yellow`}
    ></div>
  );
}
