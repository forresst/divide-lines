type Line = {
	originalLine: string;
	content?: string;
	lineBreak?: string;
	whitespaceStart?: string;
	whitespaceEnd?: string;
};

type Lines = {
	originalString?: string;
	lines: Line[];
};

const regexpLineBreak = /(\r?\n)/;
const regexpWhiteSpaceStartEnd = /(^\s+)|(\s+$)/g;

const createLine = (content: string, lineBreak?: string): Line => {
	const line: Line = {
		originalLine: '',
	};
	line.originalLine = content + (lineBreak ?? '');

	if (content !== '') {
		const matches: IterableIterator<RegExpMatchArray> = content.matchAll(regexpWhiteSpaceStartEnd);

		for (const match of matches) {
			if (match.index === 0) {
				line.whitespaceStart = match[0];
				content = content.slice(line.whitespaceStart.length);
			} else {
				line.whitespaceEnd = match[0];
				content = content.slice(0, -line.whitespaceEnd.length);
			}
		}

		if (content !== '') {
			line.content = content;
		}
	}

	if (lineBreak) {
		line.lineBreak = lineBreak;
	}

	return line;
};

const divideLines = (input?: string): Lines => {
	const lines: Line[] = [];
	const parts: string[] = (input === null || input === undefined) ? [] : input.split(regexpLineBreak);

	for (let i = 0; i < parts.length; i += 2) {
		lines.push(createLine(parts[i]!, parts[i + 1]));
	}

	return {
		originalString: input,
		lines,
	};
};

export default divideLines;
