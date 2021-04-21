interface DrawerConfigItem {
  path: string;
  label: string;
  icon: string;
  children?: DrawerConfigItem[]
}

export function drawerConfigFactory(): DrawerConfigItem[] {
  return [
    {
      path: 'dashboard',
      label: 'Dashboard',
      icon: 'space_dashboard'
    },
    {
      path: 'items',
      label: 'Items',
      icon: 'layers'
    }
  ]
}