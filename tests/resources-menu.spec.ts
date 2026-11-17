// The header's «Tes défis» submenu: two columns, «Questions» then «Ressources», the pages that help a CTO
// decide. It opens without JS and with the keyboard, marks the page the Visitor is on, and «Ressources»
// moves into the phone menu.
import { expect, test, type Page } from '@playwright/test';
import { inEachBuild, pagesOf } from './builds';
import { LANGUAGES, LINKEDIN, MALT, NAME, type Language } from './expected';

/** The heading of the «Ressources» column, which names its list of links. */
const MENU: Record<Language, string> = { fr: 'Ressources', en: 'Resources', pt: 'Recursos' };

/** The heading of the first column, the questions by audience. */
const QUESTIONS: Record<Language, string> = { fr: 'Questions', en: 'Questions', pt: 'Perguntas' };

/** The links of the questions column: the four audiences, then all the questions. */
const QUESTION_LINKS = 5;

/** The name of the «Tes défis» submenu. */
const CHALLENGES: Record<Language, string> = {
	fr: 'Tes défis',
	en: 'Your challenges',
	pt: 'Os teus desafios',
};

/** The column's entries, in order: the page's slug and the entry's name in each language. */
const ENTRIES: { slug: string; name: Record<Language, string> }[] = [
	{
		slug: 'cloud/',
		name: { fr: 'Choisir son cloud', en: 'Choosing a cloud', pt: 'Escolher a cloud' },
	},
	{
		slug: 'sovereignty/',
		name: {
			fr: 'Souveraineté des données',
			en: 'Data sovereignty',
			pt: 'Soberania dos dados',
		},
	},
	{
		slug: 'availability/',
		name: {
			fr: 'Disponibilité & conditions',
			en: 'Availability & conditions',
			pt: 'Disponibilidade e condições',
		},
	},
];

/** The submenu's button: the `<summary>` of its `<details>`. */
const menuButton = (page: Page, language: Language) =>
	page
		.getByRole('banner')
		.locator('summary')
		.filter({ hasText: CHALLENGES[language], visible: true });

/** A column of the submenu on a computer, or a group of the phone menu, by its heading. */
const column = (page: Page, name: string) =>
	page.getByRole('banner').getByRole('navigation', { name, exact: true });

/** The «Ressources» links, in the submenu on a computer or in the phone menu. */
const entries = (page: Page, language: Language) => column(page, MENU[language]).getByRole('link');

inEachBuild((build) => {
	for (const { path, language } of pagesOf(build)) {
		if (!language) continue;
		const { prefix } = LANGUAGES[language];

		test(`${path}: the "${MENU[language]}" column lists the pages and marks the current one`, async ({
			page,
		}) => {
			await page.setViewportSize({ width: 1280, height: 800 });
			await page.goto(path);
			await expect(entries(page, language)).toHaveCount(0);
			await menuButton(page, language).click();
			await expect(entries(page, language)).toHaveText(ENTRIES.map((e) => e.name[language]));
			for (const [i, { slug }] of ENTRIES.entries()) {
				const entry = entries(page, language).nth(i);
				await expect(entry).toHaveAttribute('href', prefix + slug);
				if (prefix + slug === path) await expect(entry).toHaveAttribute('aria-current', 'page');
				else await expect(entry).not.toHaveAttribute('aria-current');
			}
		});
	}

	for (const language of build.phase.publishedLanguages) {
		const { prefix, button } = LANGUAGES[language];

		test(`${prefix}: the header shows the logo, "${CHALLENGES[language]}", LinkedIn, Malt and the button, in this order`, async ({
			page,
		}) => {
			await page.setViewportSize({ width: 1280, height: 800 });
			await page.goto(prefix);
			const header = page.getByRole('banner');
			const order = [
				header.getByRole('link', { name: NAME }),
				menuButton(page, language),
				header.getByRole('link', { name: 'LinkedIn', exact: true }),
				header.getByRole('link', { name: 'Malt', exact: true }),
				header.getByRole('link', { name: button, exact: true }),
			];
			await expect(order[2]).toHaveAttribute('href', LINKEDIN);
			await expect(order[3]).toHaveAttribute('href', MALT);
			let previousEnd = 0;
			for (const item of order) {
				const box = (await item.boundingBox())!;
				expect(box.x).toBeGreaterThanOrEqual(previousEnd);
				previousEnd = box.x + box.width;
			}
		});

		test(`${prefix}: "${CHALLENGES[language]}" shows "${QUESTIONS[language]}" and "${MENU[language]}" side by side, inside the screen`, async ({
			page,
		}) => {
			for (const width of [1024, 1280, 1440]) {
				await page.setViewportSize({ width, height: 800 });
				await page.goto(prefix);
				await menuButton(page, language).click();
				const questions = (await column(page, QUESTIONS[language]).boundingBox())!;
				const resources = (await column(page, MENU[language]).boundingBox())!;
				expect(questions.x, `at ${width} px`).toBeGreaterThanOrEqual(0);
				expect(questions.x + questions.width, `at ${width} px`).toBeLessThanOrEqual(resources.x);
				expect(resources.y, `at ${width} px`).toBe(questions.y);
				expect(resources.x + resources.width, `at ${width} px`).toBeLessThanOrEqual(width);
			}
		});

		test(`${prefix}: "${CHALLENGES[language]}" opens and closes with the keyboard, "${QUESTIONS[language]}" first`, async ({
			page,
		}) => {
			await page.setViewportSize({ width: 1280, height: 800 });
			await page.goto(prefix);
			await menuButton(page, language).focus();
			await page.keyboard.press('Enter');
			const questionLinks = column(page, QUESTIONS[language]).getByRole('link');
			await expect(questionLinks).toHaveCount(QUESTION_LINKS);
			for (let i = 0; i < QUESTION_LINKS; i++) {
				await page.keyboard.press('Tab');
				await expect(questionLinks.nth(i)).toBeFocused();
			}
			await page.keyboard.press('Tab');
			await expect(entries(page, language).first()).toBeFocused();
			await page.keyboard.press('Escape');
			await expect(entries(page, language)).toHaveCount(0);
			await expect(menuButton(page, language)).toBeFocused();

			await page.keyboard.press('Enter');
			for (let i = 0; i <= QUESTION_LINKS; i++) await page.keyboard.press('Tab');
			await page.keyboard.press('Enter');
			await expect(page).toHaveURL(prefix + ENTRIES[0].slug);
		});

		test.describe(`${prefix}: without JavaScript`, () => {
			test.use({ javaScriptEnabled: false });

			test(`"${CHALLENGES[language]}" opens and leads to the "${MENU[language]}" pages`, async ({
				page,
			}) => {
				await page.setViewportSize({ width: 1280, height: 800 });
				await page.goto(prefix);
				await menuButton(page, language).click();
				await entries(page, language).first().click();
				await expect(page).toHaveURL(prefix + ENTRIES[0].slug);
			});
		});

		for (const width of [375, 768]) {
			test(`${prefix}: at ${width} px, "${MENU[language]}" moves into the menu`, async ({
				page,
			}) => {
				await page.setViewportSize({ width, height: 700 });
				await page.goto(prefix);
				const menu = page.getByRole('banner').locator('summary').filter({ visible: true });
				await expect(menu).toHaveCount(1);
				await expect(entries(page, language)).toHaveCount(0);
				await menu.click();
				await expect(entries(page, language)).toHaveText(ENTRIES.map((e) => e.name[language]));
				for (const [i, { slug }] of ENTRIES.entries()) {
					await expect(entries(page, language).nth(i)).toHaveAttribute('href', prefix + slug);
				}
			});
		}

		test(`${prefix}: the header fits on one line from 320 to 1440 px`, async ({ page }) => {
			for (const width of [320, 359, 375, 768, 1023, 1024, 1280, 1440]) {
				await page.setViewportSize({ width, height: 700 });
				await page.goto(prefix);
				const layout = await page.getByRole('banner').evaluate(
					(header, { button, phone }) => {
						// On a phone, the booking button may take two lines.
						const items = [...header.querySelectorAll<HTMLElement>('a, summary')].filter(
							(e) => e.checkVisibility() && !(phone && e.textContent!.trim() === button),
						);
						const name = (e: HTMLElement) => e.textContent!.trim() || e.outerHTML.slice(0, 60);
						// A text broken over several lines has one rectangle per line.
						const wrapped = items.filter((e) =>
							[...e.childNodes].some((node) => {
								if (node.nodeType !== Node.TEXT_NODE || !node.textContent!.trim()) return false;
								const range = document.createRange();
								range.selectNodeContents(node);
								return range.getClientRects().length > 1;
							}),
						);
						// An item the bar made narrower than it needs grows when nothing may shrink.
						const widths = items.map((e) => e.getBoundingClientRect().width);
						const noShrinking = document.createElement('style');
						noShrinking.textContent = 'header * { flex-shrink: 0 !important; }';
						document.head.append(noShrinking);
						const squeezed = items.filter(
							(e, i) => e.getBoundingClientRect().width > widths[i] + 0.5,
						);
						noShrinking.remove();
						return {
							wrapped: wrapped.map(name),
							squeezed: squeezed.map(name),
							overflow: document.documentElement.scrollWidth - innerWidth,
						};
					},
					{ button, phone: width < 768 },
				);
				expect.soft(layout.wrapped, `wrapped at ${width} px`).toEqual([]);
				expect.soft(layout.squeezed, `squeezed at ${width} px`).toEqual([]);
				expect.soft(layout.overflow, `horizontal scroll at ${width} px`).toBeLessThanOrEqual(0);
			}
		});
	}
});
