const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const ROUTES = [
  "/",
  "/about",
  "/our-space",
  "/programs",
  "/learning",
  "/admissions",
  "/activity",
  "/apply-now",
  "/contact-us",
  "/work-with-us",
  "/privacy-policy",
  "/terms-of-use",
  "/thank-you",
];

const ROUTE_TITLES = {
  "/": "Little Lantern | Finnish-Inspired Preschool in Kolkata",
  "/about": "About Us | Mission & Philosophy — Little Lantern Kolkata",
  "/our-space": "Our Space | 20+ Learning Zones & Safe Campus — Little Lantern",
  "/programs": "Programs | Preschool for Ages 12 Months–5 Years — Little Lantern",
  "/learning": "Our Pedagogy | Finnish Educare Curriculum — Little Lantern",
  "/admissions": "Admissions | Apply in 3 Simple Steps — Little Lantern Kolkata",
  "/activity": "Activity Hub | After-School Classes in Kolkata — Little Lantern",
  "/apply-now": "Apply Now | Admission Enquiry Form — Little Lantern Kolkata",
  "/contact-us": "Contact Us | Visit Our Kolkata Campus — Little Lantern",
  "/work-with-us": "Work With Us | Careers at Little Lantern Kolkata",
  "/privacy-policy": "Privacy Policy — Little Lantern Kolkata",
  "/terms-of-use": "Terms of Use — Little Lantern Kolkata",
  "/thank-you": "Thank You | Little Lantern Kolkata",
};

const BUILD_DIR = path.join(__dirname, "..", "build");
const PORT = 45678;
const BASE_URL = `http://localhost:${PORT}`;

const dedupeSeoTags = (html, route) => {
  const expectedTitle = ROUTE_TITLES[route];
  const homeTitle = ROUTE_TITLES["/"];
  const homeDescription =
    "Little Lantern is a Finnish Educare-inspired early learning centre in Kolkata for ages 12 months to 5 years. Play-based learning across 20+ zones. Book a visit.";

  if (route !== "/") {
    html = html.replaceAll(`<title>${homeTitle}</title>`, "");
    html = html.replaceAll(
      `<meta name="description" content="${homeDescription}">`,
      ""
    );
    html = html.replaceAll(
      `<meta property="og:title" content="${homeTitle}">`,
      ""
    );
    html = html.replaceAll(
      `<meta property="og:description" content="${homeDescription}">`,
      ""
    );
    html = html.replaceAll(
      `<meta property="og:url" content="https://littlelantern.in">`,
      ""
    );
    html = html.replaceAll(
      `<link rel="canonical" href="https://littlelantern.in">`,
      ""
    );
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    html = html.replace("</head>", `<title>${expectedTitle}</title></head>`);
  }

  return html;
};

const startServer = () =>
  new Promise((resolve, reject) => {
    const server = spawn("npx", ["serve", "-s", BUILD_DIR, "-l", String(PORT)], {
      stdio: "ignore",
      shell: true,
    });

    server.on("error", reject);
    setTimeout(() => resolve(server), 2000);
  });

const writeHtml = (route, html) => {
  if (route === "/") {
    fs.writeFileSync(path.join(BUILD_DIR, "index.html"), html);
    return;
  }

  const dir = path.join(BUILD_DIR, route.slice(1));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
};

const prerender = async () => {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error("Build directory not found. Run npm run build first.");
    process.exit(1);
  }

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.goto(`${BASE_URL}${route}`, {
        waitUntil: "networkidle0",
        timeout: 60000,
      });
      await page.waitForFunction(
        (expectedTitle) => document.title === expectedTitle,
        { timeout: 30000 },
        ROUTE_TITLES[route]
      );
      await new Promise((resolve) => setTimeout(resolve, 300));
      let html = await page.content();
      html = dedupeSeoTags(html, route);
      writeHtml(route, html);
      await page.close();
      console.log(`Prerendered ${route}`);
    }
  } finally {
    await browser.close();
    server.kill("SIGTERM");
  }
};

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
