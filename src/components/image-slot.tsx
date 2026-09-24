import Image from "next/image";

// Imagen de proyecto. Sin `src` reserva el espacio con el mismo tamaño,
// así el layout no cambia cuando lleguen las capturas.
// Con `size` se respeta la proporción real de la imagen en lugar de recortarla a 16:10.
export function ImageSlot({
  src,
  alt,
  size,
  priority = false,
  sizes,
  className = "",
}: {
  src?: string;
  alt: string;
  size?: { width: number; height: number };
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  if (src && size) {
    return (
      <Image
        src={src}
        alt={alt}
        width={size.width}
        height={size.height}
        priority={priority}
        sizes={sizes}
        className={`w-full rounded-xl border border-line ${className}`}
      />
    );
  }

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
