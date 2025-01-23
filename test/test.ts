import test from 'ava';
import divideLines from '../source/index.js';

test('A undefined parameter', t => {
	const input = undefined;
	const objectExpected = {
		originalString: undefined,
		lines: [],
	};
	t.deepEqual(divideLines(input), objectExpected);
});

test('A empty string', t => {
	const input = '';
	const objectExpected = {
		originalString: '',
		lines: [
			{
				originalLine: '',
			},
		],
	};
	t.deepEqual(divideLines(input), objectExpected);
});

test('Only one character', t => {
	const input = 'a';
	const objectExpected = {
		originalString: 'a',
		lines: [
			{
				content: 'a',
				originalLine: 'a',
			},
		],
	};
	t.deepEqual(divideLines(input), objectExpected);
});

test('Only one blank', t => {
	const input = ' ';
	const objectExpected = {
		originalString: ' ',
		lines: [
			{
				whitespaceStart: ' ',
				originalLine: ' ',
			},
		],
	};
	t.deepEqual(divideLines(input), objectExpected);
});

test('Only five blanks', t => {
	const input = '     ';
	const objectExpected = {
		originalString: '     ',
		lines: [
			{
				whitespaceStart: '     ',
				originalLine: '     ',
			},
		],
	};
	t.deepEqual(divideLines(input), objectExpected);
});

test('Only one \\n', t => {
	const input = '\n';
	const objectExpected = {
		originalString: '\n',
		lines: [
			{
				lineBreak: '\n',
				originalLine: '\n',
			},
			{
				originalLine: '',
			},
		],
	};
	t.deepEqual(divideLines(input), objectExpected);
});

test('Only one \\r\\n', t => {
	const input = '\r\n';
	const objectExpected = {
		originalString: '\r\n',
		lines: [
			{
				lineBreak: '\r\n',
				originalLine: '\r\n',
			},
			{
				originalLine: '',
			},
		],
	};
	t.deepEqual(divideLines(input), objectExpected);
});

test('Only one \\r', t => {
	const input = '\r';
	const objectExpected = {
		originalString: '\r',
		lines: [
			{
				whitespaceStart: '\r',
				originalLine: '\r',
			},
		],
	};
	t.deepEqual(divideLines(input), objectExpected);
});

test('String with only \\n', t => {
	const input = 'b\nc\n';
	const objectExpected = {
		originalString: 'b\nc\n',
		lines: [
			{
				content: 'b',
				lineBreak: '\n',
				originalLine: 'b\n',
			},
			{
				content: 'c',
				lineBreak: '\n',
				originalLine: 'c\n',
			},
			{
				originalLine: '',
			},
		],
	};
	t.deepEqual(divideLines(input), objectExpected);
});

test('String with multiple breaklines', t => {
	const input = '\n\rd \r\n\n e\n\nf  ';
	const objectExpected = {
		originalString: '\n\rd \r\n\n e\n\nf  ',
		lines: [
			{
				lineBreak: '\n',
				originalLine: '\n',
			},
			{
				whitespaceStart: '\r',
				whitespaceEnd: ' ',
				content: 'd',
				lineBreak: '\r\n',
				originalLine: '\rd \r\n',
			},
			{
				lineBreak: '\n',
				originalLine: '\n',
			},
			{
				whitespaceStart: ' ',
				content: 'e',
				lineBreak: '\n',
				originalLine: ' e\n',
			},
			{
				lineBreak: '\n',
				originalLine: '\n',
			},
			{
				whitespaceEnd: '  ',
				content: 'f',
				originalLine: 'f  ',
			},
		],
	};
	t.deepEqual(divideLines(input), objectExpected);
});

test('With multiple whitespace before one char', t => {
	const input = '          x \n';
	const objectExpected = {
		originalString: '          x \n',
		lines: [
			{
				whitespaceStart: '          ',
				whitespaceEnd: ' ',
				content: 'x',
				lineBreak: '\n',
				originalLine: '          x \n',
			},
			{
				originalLine: '',
			},
		],
	};
	t.deepEqual(divideLines(input), objectExpected);
});

test('With multiple whitespace after one char', t => {
	const input = ' y          \n';
	const objectExpected = {
		originalString: ' y          \n',
		lines: [
			{
				whitespaceStart: ' ',
				whitespaceEnd: '          ',
				content: 'y',
				lineBreak: '\n',
				originalLine: ' y          \n',
			},
			{
				originalLine: '',
			},
		],
	};
	t.deepEqual(divideLines(input), objectExpected);
});

test('String type markdown', t => {
	const input = `## Title

My text.
	foo
	bar

	> **Note**: Hello
`;
	const objectExpected = {
		originalString: '## Title\n\nMy text.\n\tfoo\n\tbar\n\n\t> **Note**: Hello\n',
		lines: [
			{
				content: '## Title',
				lineBreak: '\n',
				originalLine: '## Title\n',
			},
			{
				lineBreak: '\n',
				originalLine: '\n',
			},
			{
				content: 'My text.',
				lineBreak: '\n',
				originalLine: 'My text.\n',
			},
			{
				whitespaceStart: '\t',
				content: 'foo',
				lineBreak: '\n',
				originalLine: '\tfoo\n',
			},
			{
				whitespaceStart: '\t',
				content: 'bar',
				lineBreak: '\n',
				originalLine: '\tbar\n',
			},
			{
				lineBreak: '\n',
				originalLine: '\n',
			},
			{
				whitespaceStart: '\t',
				content: '> **Note**: Hello',
				lineBreak: '\n',
				originalLine: '\t> **Note**: Hello\n',
			},
			{
				originalLine: '',
			},
		],
	};
	t.deepEqual(divideLines(input), objectExpected);
});
