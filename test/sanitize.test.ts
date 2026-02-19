import { test } from 'node:test';
import assert from 'node:assert';
import { escapeHtml } from '../src/utils/sanitize';

test('escapeHtml sanitizes special characters', () => {
  const input = '<script>alert("XSS")</script>&\'';
  const expected = '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;&amp;&#039;';
  const actual = escapeHtml(input);
  assert.strictEqual(actual, expected);
});

test('escapeHtml handles strings without special characters', () => {
  const input = 'Hello World';
  const expected = 'Hello World';
  const actual = escapeHtml(input);
  assert.strictEqual(actual, expected);
});
