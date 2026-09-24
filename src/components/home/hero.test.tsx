import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { facts, site } from "@/content/site";
import { Hero } from "./hero";

describe("Hero", () => {
  it("muestra el rol y el stack en un solo h1", () => {
    render(<Hero />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent(site.role);
    expect(h1).toHaveTextContent(site.stackLine);
  });

  it("tiene el CV descargable y el link a contacto", () => {
    render(<Hero />);
    const cv = screen.getByRole("link", { name: /descargar cv/i });
    expect(cv).toHaveAttribute("href", site.cvPath);
    expect(cv).toHaveAttribute("download");
    expect(screen.getByRole("link", { name: /contacto/i })).toHaveAttribute(
      "href",
      "#contacto",
    );
  });

  it("muestra los datos clave y la ubicación", () => {
    render(<Hero />);
    const list = screen.getByText(facts[0].label).closest("dl")!;
    for (const fact of facts) {
      expect(within(list).getByText(fact.value)).toBeInTheDocument();
      expect(within(list).getByText(fact.label)).toBeInTheDocument();
    }
    expect(within(list).getByText(site.location)).toBeInTheDocument();
  });
});
