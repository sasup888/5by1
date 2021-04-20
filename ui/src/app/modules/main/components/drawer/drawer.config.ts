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
      icon: 'view_sidebar'
    },
    {
      path: 'items',
      label: 'Items',
      icon: 'layers'
    }
  ]
}