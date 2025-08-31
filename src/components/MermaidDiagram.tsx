import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({ startOnLoad: false, theme: 'default' });

export const MermaidDiagram: React.FC<{ diagram: string }> = ({ diagram }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        if (!ref.current) return;
        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.render(id, diagram);
        if (isMounted && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (e) {
        // Fallback render
        if (ref.current) {
          ref.current.textContent = 'Diagram failed to render';
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [diagram]);

  return <div ref={ref} className="overflow-auto" />;
};
