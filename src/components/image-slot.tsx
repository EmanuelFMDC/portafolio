import Image from "next/image";

// Imagen de proyecto. Sin `src` reserva el espacio con el mismo tamaño,
// así el layout no cambia cuando lleguen las capturas.
export function ImageSlot({
  src,
  alt,
  priority = false,
  sizes,
  className = "",
}: {
  src?: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-faint">
          Captura en preparación
        </div>
      )}
    </div>
  );
}
