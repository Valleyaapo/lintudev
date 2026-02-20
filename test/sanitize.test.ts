import { test } from 'node:test';
import assert from 'node:assert';
import { escapeHtml } from '../src/utils/sanitize';

test('escapeHtml should escape dangerous characters', () => {
  const input = '<script>alert("xss")</script>';
  const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;';
  const actual = escapeHtml(input);
  assert.strictEqual(actual, expected);
});

test('escapeHtml should handle ampersands', () => {
  const input = 'Tom & Jerry';
  const expected = 'Tom &amp; Jerry';
  const actual = escapeHtml(input);
  assert.strictEqual(actual, expected);
});

test('escapeHtml should handle single quotes', () => {
  const input = "It's working";
  const expected = "It&#039;s working";
  const actual = escapeHtml(input);
  assert.strictEqual(actual, expected);
});

test('escapeHtml should return empty string for non-string input', () => {
  // @ts-expect-error Testing invalid input type
  const actual = escapeHtml(null);
  assert.strictEqual(actual, '');
});

test('escapeHtml should preserve safe characters', () => {
  const input = 'Hello World';
  const expected = 'Hello World';
  const actual = escapeHtml(input);
  assert.strictEqual(actual, expected);
});
