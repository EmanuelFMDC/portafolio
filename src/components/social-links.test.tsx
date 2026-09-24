import { afterEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { site } from "@/content/site";
import { SocialLinks } from "./social-links";

const original = { ...site.links };

describe("SocialLinks", () => {
  afterEach(() => {
    Object.assign(site.links, original);
  });

  it("no renderiza nada si no hay URLs", () => {
    site.links.github = "";
    site.links.linkedin = "";
    const { container } = render(<SocialLinks />);
    expect(container).toBeEmptyDOMElement();
  });

  it("muestra solo los perfiles con URL y los abre en otra pestaña", () => {
    site.links.github = "https://github.com/ejemplo";
    site.links.linkedin = "";
    render(<SocialLinks />);

    const github = screen.getByRole("link", { name: "GitHub" });
    expect(github).toHaveAttribute("href", "https://github.com/ejemplo");
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", "noreferrer");
    expect(screen.queryByRole("link", { name: "LinkedIn" })).toBeNull();
  });
});
