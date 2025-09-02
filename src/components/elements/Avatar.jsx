export default function Avatar({ src, alt = "Avatar" }) {
  return (
    <div
      className="size-10 aspect-square rounded-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("${src}")` }}
      aria-label={alt}
    />
  );
}
