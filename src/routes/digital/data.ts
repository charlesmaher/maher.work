import progLang from './programming-languages.txt?raw';
import webTech from './web-tech.txt?raw';

export interface TechStats {
	name: string;
	skill: number;
	love: number;
	shortDesc: string;
	longDesc: string;
}

const splitOnce = (str: string, separator: string | RegExp, keep = false) => {
	const i = str.search(separator);
	let len = typeof separator === 'string' ? separator.length : 1;
	if (keep) len = 0;
	return [str.slice(0, i), str.slice(i + len)];
};

function processText(text: string): TechStats[] {
	return text
		.split('-- ')
		.filter((s) => s.trim().length > 0)
		.map((s) => {
			const [name, rest] = splitOnce(s, ' - ');
			const [skillLove, desc] = splitOnce(rest, /\s/, true);
			const [skill, love] = skillLove.split(':').map((s) => parseInt(s, 10));
			const [shortDesc, longDesc] = splitOnce(desc, '\n').map((s) => s.trim());
			return {
				name,
				skill,
				love,
				shortDesc,
				longDesc,
			};
		});
}

export default {
	'programming-languages': processText(progLang),
	'web-tech': processText(webTech),
} as Record<string, TechStats[]>;
