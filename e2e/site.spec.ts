import { expect, test } from "@playwright/test";

test.describe("inicio", () => {
  test("muestra el hero con el rol y las acciones principales", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Emanuel Frías/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Desarrollador Frontend",
    );
    await expect(page.getByRole("link", { name: /descargar cv/i })).toBeVisible();
    await expect(
      page.getByRole("main").getByRole("link", { name: "Contacto" }),
    ).toBeVisible();
  });

  test("no tiene scroll horizontal", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test("el botón de contacto lleva a la sección", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("main").getByRole("link", { name: "Contacto" }).click();
    await expect(page).toHaveURL(/#contacto$/);
    await expect(page.getByRole("heading", { name: "Contacto" })).toBeInViewport();
  });
});

test.describe("proyectos", () => {
  test("abre un caso desde su tarjeta y regresa", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: "Marketplace de renta de cuartos y casas" })
      .click();

    await expect(page).toHaveURL("/proyectos/marketplace-renta");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Marketplace de renta de cuartos y casas",
    );
    await expect(
      page.getByRole("heading", { name: "Contexto y problema" }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Proyectos" }).first().click();
    await expect(page).toHaveURL(/\/#proyectos$/);
  });

  test("un proyecto que no existe da 404", async ({ page }) => {
    const response = await page.goto("/proyectos/no-existe");
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("heading", { name: "Página no encontrada" }),
    ).toBeVisible();
  });
});

test.describe("tema", () => {
  test("respeta el modo del sistema al entrar", async ({ browser }) => {
    const context = await browser.newContext({ colorScheme: "dark" });
    const page = await context.newPage();
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await context.close();
  });

  test("el cambio de tema se mantiene al recargar", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("data-theme", "light");

    await page.getByRole("button", { name: /modo claro y oscuro/i }).click();
    await expect(html).toHaveAttribute("data-theme", "dark");

    await page.reload();
    await expect(html).toHaveAttribute("data-theme", "dark");
  });
});

test.describe("SEO", () => {
  test("publica sitemap, robots e imagen Open Graph", async ({ request, page }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBe(true);
    expect(await sitemap.text()).toContain("/proyectos/marketplace-renta");

    expect((await request.get("/robots.txt")).ok()).toBe(true);

    await page.goto("/");
    const ogImage = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content");
    expect(ogImage).toBeTruthy();
    const image = await request.get(new URL(ogImage!).pathname);
    expect(image.ok()).toBe(true);
    expect(image.headers()["content-type"]).toBe("image/png");
  });
});
