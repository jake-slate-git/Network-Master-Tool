import React from 'react';
import { Mosaic, MosaicWindow, MosaicNode } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import { Terminal, FileCode, Search, Activity, Globe } from 'lucide-react';
import TerminalModule from '../../modules/terminal/TerminalModule';

export type ViewId = 'terminal' | 'file-hub' | 'analyzer' | 'diagnostics' | 'api-client';

const TITLE_MAP: Record<ViewId, string> = {
  'terminal': 'Terminal',
  'file-hub': 'File Transfer Hub',
  'analyzer': 'Network Analyzer',
  'diagnostics': 'Diagnostics',
  'api-client': 'REST API Client',
};

const ICON_MAP: Record<ViewId, React.ReactNode> = {
  'terminal': <Terminal size={16} />,
  'file-hub': <FileCode size={16} />,
  'analyzer': <Search size={16} />,
  'diagnostics': <Activity size={16} />,
  'api-client': <Globe size={16} />,
};

const AppLayout: React.FC = () => {
  const [currentNode, setCurrentNode] = React.useState<MosaicNode<ViewId>>({
    direction: 'row',
    first: 'terminal',
    second: {
      direction: 'column',
      first: 'analyzer',
      second: 'diagnostics',
    },
    splitPercentage: 60,
  });

  const renderModule = (id: ViewId) => {
    switch (id) {
      case 'terminal':
        return <TerminalModule id={id} />;
      default:
        return (
          <div className="h-full w-full bg-slate-950 flex flex-col border border-slate-800">
             <div className="flex-1 flex items-center justify-center">
                <div className="text-slate-600 text-sm italic flex flex-col items-center gap-2">
                   {ICON_MAP[id]}
                   <span>{TITLE_MAP[id]} Module Placeholder</span>
                </div>
             </div>
          </div>
        );
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-900 text-slate-100 overflow-hidden flex flex-col">
      <header className="h-10 border-b border-slate-700 flex items-center px-4 bg-slate-800 shrink-0">
        <h1 className="font-bold text-blue-400 tracking-wider">NETOMNI</h1>
        <nav className="ml-8 flex gap-4 text-xs font-medium text-slate-400">
          <button className="hover:text-slate-100 cursor-pointer transition-colors">SESSIONS</button>
          <button className="hover:text-slate-100 cursor-pointer transition-colors">SERVERS</button>
          <button className="hover:text-slate-100 cursor-pointer transition-colors">TOOLS</button>
          <button className="hover:text-slate-100 cursor-pointer transition-colors">SETTINGS</button>
        </nav>
      </header>

      <main className="flex-1 relative overflow-hidden">
        <Mosaic<ViewId>
          renderTile={(id, path) => (
            <MosaicWindow<ViewId>
              path={path}
              title={TITLE_MAP[id]}
            >
              {renderModule(id)}
            </MosaicWindow>
          )}
          value={currentNode}
          onChange={(node) => node && setCurrentNode(node)}
          className="mosaic-blueprint-theme"
        />
      </main>

      <footer className="h-6 border-t border-slate-700 bg-slate-800 flex items-center px-4 justify-between text-[10px] text-slate-500 uppercase tracking-widest">
        <div className="flex gap-4">
          <span>TFTP: OFF</span>
          <span>FTP: OFF</span>
          <span>SYSLOG: OFF</span>
        </div>
        <div className="flex gap-4">
          <span>CPU: 2%</span>
          <span>MEM: 128MB</span>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .mosaic-window .mosaic-window-toolbar {
          background: #1e293b !important;
          color: #94a3b8 !important;
          box-shadow: none !important;
          height: 30px !important;
        }
        .mosaic-window .mosaic-window-title {
          font-size: 11px !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
        }
        .mosaic-window .mosaic-window-body {
          background: #020617 !important;
        }
        .mosaic-root {
          background: #0f172a !important;
          position: absolute !important;
          top: 0 !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;
        }
        .mosaic-tile {
          margin: 1px !important;
        }
        .mosaic-window-toolbar .controls-left, .mosaic-window-toolbar .controls-right {
           display: flex;
           align-items: center;
        }
        .mosaic-window-toolbar button {
           color: #64748b !important;
        }
        .mosaic-window-toolbar button:hover {
           color: #f1f5f9 !important;
        }
      `}} />
    </div>
  );
};

export default AppLayout;
