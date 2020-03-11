'use strict';

interface Line {
	originalLine: string;
	content?: string;
	lineBreak?: string;
	whitespaceStart?: string;
	whitespaceEnd?: string;
}

interface Lines {
	originalString: string;
	lines: Line[];
}

const REGEXP_LINE_BREAK = /(\r?\n)/;
const REGEXP_WHITESPACE_START_END = /(^\s+)|(\s+$)/g;

const createLine = (content: string, lineBreak?: string): Line => {
	const line: Line = {} as any;
	line.originalLine = content + ((lineBreak) ? lineBreak : '');

	if (content !== '') {
		const matches: IterableIterator<RegExpMatchArray> = content.matchAll(REGEXP_WHITESPACE_START_END);

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

const divideLines = (input: string): Lines => {
	const lines: Line[] = [];
	const parts: string[] = input.split(REGEXP_LINE_BREAK);

	for (let i = 0; i < parts.length; i += 2) {
		lines.push(createLine(parts[i], parts[i + 1]));
	}

	return {
		originalString: input,
		lines
	};
};

export default divideLines;

module.exports = divideLines;
module.exports.default = divideLines;
