# NetOmni

NetOmni is a unified, single-pane-of-glass desktop application that consolidates the functionalities of Wireshark, WinSCP, PuTTY, and standard network diagnostic tools into one seamless, modern, and highly performant interface.

## Features (Phase 1)
- **Unified Terminal:** High-performance terminal emulation with SSH support.
- **Tiling Layout:** Flexible window management for simultaneous tool usage.
- **Modern UI:** Streamlined, dark-themed interface designed for network engineers.

## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, xterm.js
- **Backend:** Rust, Tauri, Tokio, Russh, Pcap

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js:** (v18 or later recommended)
- **Rust:** You must have the Rust toolchain installed (Cargo). [Install Rust](https://www.rust-lang.org/tools/install)
- **System Dependencies:** Tauri requires certain system libraries (e.g., `webkit2gtk`, `libpcap`).
  - Follow the [Tauri Prerequisites Guide](https://tauri.app/start/prerequisites/) for your specific OS.

## Development
```bash
# Install NPM dependencies
npm install

# Run the app in development mode
npm run tauri dev
```

## Troubleshooting
If you see `program not found: cargo`, it means the Rust toolchain is not in your PATH. Please ensure Rust is installed and your shell is restarted.
