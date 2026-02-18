import { escapeHtml } from '../src/utils/sanitize';
import assert from 'node:assert';
import { test } from 'node:test';

test('escapeHtml sanitizes basic string', () => {
  const input = 'Hello World';
  assert.strictEqual(escapeHtml(input), input);
});

test('escapeHtml sanitizes HTML tags', () => {
  const input = '<script>alert("xss")</script>';
  const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;';
  assert.strictEqual(escapeHtml(input), expected);
});

test('escapeHtml sanitizes special characters', () => {
  const input = '& < > " \'';
  const expected = '&amp; &lt; &gt; &quot; &#039;';
  assert.strictEqual(escapeHtml(input), expected);
});

test('escapeHtml handles mixed content', () => {
  const input = 'Hello <b>World</b>!';
  const expected = 'Hello &lt;b&gt;World&lt;/b&gt;!';
  assert.strictEqual(escapeHtml(input), expected);
});
