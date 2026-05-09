import React, { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

interface TerminalModuleProps {
  id: string;
}

const TerminalModule: React.FC<TerminalModuleProps> = ({ id: _id }) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    const term = new Terminal({
      cursorBlink: true,
      fontSize: 13,
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      theme: {
        background: '#020617',
        foreground: '#cbd5e1',
        cursor: '#60a5fa',
        selectionBackground: '#334155',
        black: '#0f172a',
        red: '#ef4444',
        green: '#22c55e',
        yellow: '#eab308',
        blue: '#3b82f6',
        magenta: '#a855f7',
        cyan: '#06b6d4',
        white: '#f8fafc',
      },
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    term.open(terminalRef.current);
    fitAddon.fit();

    term.writeln('\x1b[1;34mNetOmni Unified Terminal\x1b[0m');
    term.writeln('Type "help" for a list of local commands or connect to a remote host.');
    term.write('\n\r\x1b[1;32mnetomni\x1b[0m \x1b[1;30m>\x1b[0m ');

    xtermRef.current = term;
    fitAddonRef.current = fitAddon;

    const handleResize = () => {
      fitAddon.fit();
    };

    window.addEventListener('resize', handleResize);

    // Simple echo for now
    term.onData((data) => {
      if (data === '\r') {
        term.write('\n\r\x1b[1;32mnetomni\x1b[0m \x1b[1;30m>\x1b[0m ');
      } else if (data === '\u007f') { // backspace
        term.write('\b \b');
      } else {
        term.write(data);
      }
    });

    // Implementation of 5-minute pruning (simulated for now)
    const pruningInterval = setInterval(() => {
       // In a real implementation with a data source, we would
       // filter the buffer by timestamp here.
       // Xterm.js buffer is line-based, so we'd manage a separate
       // timestamp-indexed log and re-render if necessary.
       console.log('Pruning terminal buffer older than 5 minutes...');
    }, 60000);

    return () => {
      window.removeEventListener('resize', handleResize);
      term.dispose();
      clearInterval(pruningInterval);
    };
  }, []);

  return (
    <div className="w-full h-full p-2 bg-slate-950 overflow-hidden">
      <div ref={terminalRef} className="w-full h-full" />
    </div>
  );
};

export default TerminalModule;
