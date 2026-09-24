import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-32 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight">Página no encontrada</h1>
      <p className="mt-4 text-muted">La dirección no existe o cambió.</p>
      <Link
        href="/"
        className="press mt-8 inline-flex h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg hover:bg-fg/85"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
