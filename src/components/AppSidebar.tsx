import {
  LayoutDashboard,
  Network,
  Target,
  GitCompare,
  AlertTriangle,
  Clock,
  Shield,
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const mainItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Mapa de Conexões', url: '/rede', icon: Network },
  { title: 'Comparador', url: '/comparador', icon: GitCompare },
  { title: 'Alertas', url: '/alertas', icon: AlertTriangle },
];

const targetItems = [
  { title: 'Maickon Sgrott', url: '/alvo/t1', cargo: 'Prefeito' },
  { title: 'Rudnei Amorim', url: '/alvo/t2', cargo: 'Vice' },
  { title: 'Vilson Porcincula', url: '/alvo/t3', cargo: 'Vereador' },
  { title: 'Nadir Amorim', url: '/alvo/t4', cargo: 'Vereadora' },
  { title: 'Jhone R. Poli', url: '/alvo/t5', cargo: 'Secretário' },
  { title: 'Jordan C. Laus', url: '/alvo/t13', cargo: 'Diretor' },
  { title: 'Ezequiel Amorim', url: '/alvo/t11', cargo: 'Diretor' },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="bg-sidebar">
        {/* Logo */}
        <div className="p-3 border-b border-sidebar-border">
          {!collapsed ? (
            <div>
              <h2 className="text-sm font-bold text-foreground">TIJUCAS</h2>
              <p className="text-[9px] text-muted-foreground font-mono-data">FRAUD INTELLIGENCE</p>
            </div>
          ) : (
            <div className="flex justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
          )}
        </div>

        {/* Main nav */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-[9px]">NAVEGAÇÃO</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map(item => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === '/'}
                      className="hover:bg-sidebar-accent/50"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span className="text-xs">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Targets */}
        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-[9px]">ALVOS PRIORITÁRIOS</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {targetItems.map(item => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className="hover:bg-sidebar-accent/50"
                        activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                      >
                        <Target className="mr-2 h-3 w-3" />
                        <div className="flex flex-col">
                          <span className="text-[11px]">{item.title}</span>
                          <span className="text-[9px] text-muted-foreground">{item.cargo}</span>
                        </div>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
