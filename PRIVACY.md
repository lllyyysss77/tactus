# Privacy Policy for Tactus

**Last updated: March 15, 2026**

## Overview

Tactus is a browser extension that provides AI-powered assistance through a sidebar chat interface. We are committed to protecting your privacy. This policy explains how Tactus handles data.

## Data Collection

**Tactus does not collect, store, or transmit any personal data to the developer or any developer-controlled servers.** All user data — including conversations, settings, API keys, and imported skills — is stored locally on your device using browser storage (IndexedDB and browser local storage).

## Third-Party AI Services

Tactus allows you to connect to third-party AI services of your choice, such as:

- Anthropic (Claude)
- Google (Gemini)
- OpenAI-compatible APIs

When you send a message, Tactus transmits your input (and optionally, extracted page content) directly to the AI provider you have configured. **This data is sent directly from your browser to the third-party service — it does not pass through any intermediary servers controlled by the developer.** Your use of these third-party services is subject to their respective privacy policies.

## Permissions

Tactus requests the following browser permissions:

- **Storage / Unlimited Storage**: To save your conversations, settings, and skills locally on your device.
- **Active Tab / Scripting**: To extract content from the current web page when you request AI assistance with page content.
- **Identity**: To support OAuth authentication for MCP (Model Context Protocol) server connections that you configure.
- **Side Panel**: To display the chat interface as a browser sidebar.
- **Host Permissions (`<all_urls>`)**: To enable page content extraction and skill execution on any website you choose to use Tactus on.

## Data Sharing

Tactus does **not** share your data with any third parties other than the AI service providers you explicitly configure and interact with.

## Data Security

All data is stored locally on your device. API keys you provide are stored in your browser's local storage and are only used to authenticate requests to your chosen AI providers.

## Changes to This Policy

We may update this Privacy Policy from time to time. Changes will be posted in this document with an updated date.

## Contact

If you have any questions about this Privacy Policy, please open an issue at [https://github.com/Castor6/tactus/issues](https://github.com/Castor6/tactus/issues).
