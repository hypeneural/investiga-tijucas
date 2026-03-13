import { useEffect, useRef, useCallback } from 'react';
import cytoscape from 'cytoscape';
import { graphNodes, graphEdges } from '@/lib/mocks/data';

interface NetworkGraphProps {
  height?: string;
  onNodeClick?: (nodeId: string) => void;
}

const nodeColors: Record<string, string> = {
  prefeito: '#EF4444',
  vice: '#F59E0B',
  secretario: '#38BDF8',
  vereador: '#A78BFA',
  funcionario: '#6B7280',
  nucleo_familiar: '#F97316',
  credor_pf: '#10B981',
  credor_pj: '#14B8A6',
  orgao: '#64748B',
  alerta: '#EF4444',
};

const nodeShapes: Record<string, string> = {
  prefeito: 'star',
  vice: 'diamond',
  secretario: 'round-rectangle',
  vereador: 'hexagon',
  nucleo_familiar: 'triangle',
  credor_pf: 'ellipse',
  credor_pj: 'barrel',
  orgao: 'round-rectangle',
  alerta: 'star',
};

const edgeColors: Record<string, string> = {
  controla_setor: '#38BDF8',
  trabalha_em: '#64748B',
  recebe_pagamento: '#10B981',
  compartilha_sobrenome: '#F97316',
  credor_transversal: '#EF4444',
  ligacao_societaria: '#F59E0B',
  pagamento_direto: '#EF4444',
  sincronicidade_temporal: '#A78BFA',
  fracionamento: '#EF4444',
};

export function NetworkGraph({ height = '500px', onNodeClick }: NetworkGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<cytoscape.Core | null>(null);

  const initGraph = useCallback(() => {
    if (!containerRef.current) return;

    const elements: cytoscape.ElementDefinition[] = [
      ...graphNodes.map(n => ({
        data: {
          id: n.id,
          label: n.label,
          nodeType: n.type,
          riskLevel: n.riskLevel,
          score: n.score,
        },
      })),
      ...graphEdges.map(e => ({
        data: {
          id: e.id,
          source: e.source,
          target: e.target,
          edgeType: e.type,
          weight: e.weight,
          label: e.label,
        },
      })),
    ];

    const cy = cytoscape({
      container: containerRef.current,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(label)',
            'font-size': '9px',
            'color': '#F8FAFC',
            'text-valign': 'bottom',
            'text-margin-y': 6,
            'text-wrap': 'wrap',
            'text-max-width': '80px',
            'background-opacity': 0.9,
            'border-width': 2,
            'border-opacity': 0.6,
            'width': 30,
            'height': 30,
          },
        },
        ...Object.entries(nodeColors).map(([type, color]) => ({
          selector: `node[nodeType="${type}"]`,
          style: {
            'background-color': color,
            'border-color': color,
            'shape': (nodeShapes[type] || 'ellipse') as any,
          },
        })),
        {
          selector: 'node[nodeType="prefeito"], node[nodeType="vice"]',
          style: {
            'width': 40,
            'height': 40,
            'font-size': '11px',
            'font-weight': 'bold' as any,
          },
        },
        {
          selector: 'node[nodeType="alerta"]',
          style: {
            'width': 22,
            'height': 22,
            'font-size': '8px',
          },
        },
        {
          selector: 'edge',
          style: {
            'width': 'mapData(weight, 1, 10, 1, 4)',
            'line-opacity': 0.5,
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            'target-arrow-color': '#475569',
            'arrow-scale': 0.6,
          },
        },
        ...Object.entries(edgeColors).map(([type, color]) => ({
          selector: `edge[edgeType="${type}"]`,
          style: {
            'line-color': color,
            'target-arrow-color': color,
          },
        })),
        {
          selector: 'node:active, node:selected',
          style: {
            'border-width': 3,
            'border-color': '#38BDF8',
            'overlay-opacity': 0.1,
          },
        },
        {
          selector: '.highlighted',
          style: {
            'border-width': 4,
            'border-color': '#38BDF8',
          },
        },
        {
          selector: '.faded',
          style: {
            'opacity': 0.15,
          },
        },
      ],
      layout: {
        name: 'cose',
        idealEdgeLength: () => 120,
        nodeOverlap: 20,
        refresh: 20,
        fit: true,
        padding: 30,
        randomize: false,
        componentSpacing: 100,
        nodeRepulsion: () => 8000,
        edgeElasticity: () => 100,
        nestingFactor: 5,
        gravity: 80,
        numIter: 1000,
        initialTemp: 200,
        coolingFactor: 0.95,
        minTemp: 1.0,
      } as any,
      minZoom: 0.3,
      maxZoom: 3,
    });

    // Hover highlight
    cy.on('mouseover', 'node', (e) => {
      const node = e.target;
      const neighborhood = node.neighborhood().add(node);
      cy.elements().addClass('faded');
      neighborhood.removeClass('faded');
      node.addClass('highlighted');
    });

    cy.on('mouseout', 'node', () => {
      cy.elements().removeClass('faded').removeClass('highlighted');
    });

    cy.on('tap', 'node', (e) => {
      const nodeId = e.target.id();
      onNodeClick?.(nodeId);
    });

    cyRef.current = cy;
  }, [onNodeClick]);

  useEffect(() => {
    initGraph();
    return () => {
      cyRef.current?.destroy();
    };
  }, [initGraph]);

  return (
    <div className="card-surface overflow-hidden">
      <div className="flex items-center justify-between p-3 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground">Mapa Global de Conexões</h3>
        <div className="flex gap-3 flex-wrap">
          {Object.entries({ 'Prefeito': '#EF4444', 'Vice': '#F59E0B', 'Secretário': '#38BDF8', 'Vereador': '#A78BFA', 'Núcleo': '#F97316', 'Credor PF': '#10B981', 'Credor PJ': '#14B8A6', 'Órgão': '#64748B', 'Alerta': '#EF4444' }).map(([label, color]) => (
            <span key={label} className="flex items-center gap-1 text-[9px] text-muted-foreground">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              {label}
            </span>
          ))}
        </div>
      </div>
      <div ref={containerRef} style={{ height }} className="cytoscape-container" />
    </div>
  );
}
