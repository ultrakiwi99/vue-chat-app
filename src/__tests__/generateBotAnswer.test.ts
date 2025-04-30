import { describe, it, expect } from "vitest";
import { generateBotAnswer } from "@/services/chatService";
import { MD5 } from "crypto-js";

describe('generateBotAnswer', () => {
  it('should return a right string based on passed in option', () => {
    expect(generateBotAnswer('Hello, how are you?', 0)).toBe('?uoy era woh ,olleH');
    expect(generateBotAnswer('Hello, how are you?', 1)).toBe('olleH, woh era uoy?')
    expect(generateBotAnswer('Hello, how are you?', 2)).toBe(MD5('Hello, how are you?').toString());
   });
 });
