// lib/crypto.ts

import { createCipheriv, createDecipheriv, scryptSync } from 'crypto';

// Ensure these are set in your .env.local file!
const secret = process.env.ENCRYPTION_SECRET;
const salt = process.env.ENCRYPTION_SALT;

if (!secret || !salt) {
  throw new Error('Encryption secret and salt must be defined in environment variables.');
}

// We derive a 32-byte key from the secret and salt.
const key = scryptSync(secret, salt, 32);

// The algorithm to use. AES-256-GCM is a modern, secure choice.
const algorithm = 'aes-256-gcm';

/**
 * Encrypts a string of text.
 * @param text The text to encrypt.
 * @returns An object containing the initialization vector (iv) and the encrypted data.
 */
export function encrypt(text: string) {
  // Use a random 16-byte initialization vector for each encryption. This is crucial for security.
  const iv = Buffer.from(require('crypto').randomBytes(16));
  const cipher = createCipheriv(algorithm, key, iv);
  
  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();

  // We'll combine the IV, auth tag, and encrypted data into a single string for easy transport.
  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted.toString('hex')}`;
}

/**
 * Decrypts an encrypted string.
 * @param hash The encrypted string in the format "iv:authTag:encryptedData".
 * @returns The original decrypted text.
 */
export function decrypt(hash: string) {
  const [ivHex, authTagHex, encryptedHex] = hash.split(':');
  
  if (!ivHex || !authTagHex || !encryptedHex) {
      throw new Error("Invalid encrypted string format.");
  }

  const iv = Buffer.from(ivHex, 'hex');
  const authTag = Buffer.from(authTagHex, 'hex');
  const encrypted = Buffer.from(encryptedHex, 'hex');
  
  const decipher = createDecipheriv(algorithm, key, iv);
  decipher.setAuthTag(authTag);
  
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  
  return decrypted.toString('utf8');
}