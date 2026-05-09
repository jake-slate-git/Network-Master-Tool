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

### `NASM command not found`
By default, some Rust crypto libraries require NASM. I have configured `russh` to use the `ring` backend to avoid this dependency. If you still encounter this error, ensure you have a C compiler installed (like MSVC on Windows or GCC on Linux) or install [NASM](https://www.nasm.us/).

### `glib-2.0 not found` (Linux)
If building on Linux, ensure you have the GTK3 and GLib development headers installed:
- Ubuntu/Debian: `sudo apt install libgtk-3-dev libsoup-3.0-dev libwebkit2gtk-4.1-dev build-essential curl wget libssl-dev libayatana-appindicator3-dev librsvg2-dev`

### `program not found: cargo`
Ensure the Rust toolchain is in your system PATH. After installing Rust, you may need to restart your terminal or run `source $HOME/.cargo/env`.
