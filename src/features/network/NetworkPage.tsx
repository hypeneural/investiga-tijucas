import { NetworkGraph } from './NetworkGraph';

export function NetworkPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg font-bold text-foreground">Mapa Global de Conexões</h1>
        <p className="text-xs text-muted-foreground">Visualização interativa de todas as conexões entre alvos, credores, setores e núcleos familiares</p>
      </div>
      <NetworkGraph height="calc(100vh - 160px)" />
    </div>
  );
}
