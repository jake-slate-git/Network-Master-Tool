# NetOmni Architecture & Design

## 1. Vision
NetOmni is a unified "Swiss Army Knife" for Network Engineers, consolidating Terminal, File Transfer, Packet Analysis, and Diagnostics into a single-pane-of-glass application.

## 2. Tech Stack

### Backend: Rust (via Tauri)
*   **Why:** High performance for packet parsing, memory safety for protocol handling, and small binary footprint.
*   **Core Libraries:**
    *   `tauri`: Desktop application framework.
    *   `tokio`: Asynchronous runtime for concurrent sessions and servers.
    *   `russh`: SSH2 protocol implementation.
    *   `pcap`: Interface for libpcap/Npcap.
    *   `serde`: JSON serialization for local storage.

### Frontend: React + TypeScript
*   **Why:** Robust ecosystem for complex UI state and window management.
*   **Core Libraries:**
    *   `xterm`: High-performance terminal emulation.
    *   `react-mosaic-component`: Tiling window management.
    *   `tailwind-css`: Modern, streamlined styling.
    *   `lucide-react`: Iconography.

## 3. Directory Structure
```text
netomni/
├── src-tauri/              # Rust backend
│   ├── src/
│   │   ├── api/            # REST API client logic
│   │   ├── connection/     # SSH, Telnet, Serial logic
│   │   ├── diagnostic/     # Ping, Traceroute, Port Scan
│   │   ├── files/          # SCP, SFTP, FTP logic
│   │   ├── packet/         # Packet sniffing and decoding
│   │   ├── servers/        # Built-in TFTP/FTP/Syslog servers
│   │   ├── storage/        # JSON storage and encryption
│   │   └── main.rs         # Entry point and Tauri commands
│   ├── Cargo.toml
│   └── tauri.conf.json
├── src/                    # React frontend
│   ├── components/         # Shared UI components
│   │   ├── layout/         # Window manager, Tiling/Tabs
│   │   └── ui/             # Buttons, Inputs, Modals
│   ├── modules/            # Major feature modules
│   │   ├── terminal/
│   │   ├── file-hub/
│   │   ├── analyzer/
│   │   ├── diagnostics/
│   │   └── api-client/
│   ├── hooks/              # Custom React hooks
│   ├── store/              # Global state management
│   ├── types/              # TypeScript definitions
│   ├── App.tsx
│   └── main.tsx
├── public/                 # Static assets
├── package.json
└── README.md
```

## 4. Key Design Decisions
*   **Storage:** Local JSON files for portability and ease of backup, encrypted with a master password using AES-GCM.
*   **Terminal Buffer:** Circular buffer with a 5-minute time-based pruning logic.
*   **Tiling:** Supports both tabs and side-by-side tiling to allow simultaneous viewing of terminal and packet captures.
