export interface DrawerConfigItem {
  path: string;
  label: string;
  icon: string;
  children?: DrawerConfigItem[];
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
    },
    {
      path: 'sale',
      label: 'Sale',
      icon: 'paid',
      children: [
        {
          path: 'sale1',
          label: 'Sale1',
          icon: 'paid',
        },
        {
          path: 'sale2',
          label: 'Sale2',
          icon: 'paid',
        }
      ]
    },
    {
      path: 'purchases',
      label: 'Purchases',
      icon: 'shopping_cart'
    },
    {
      path: 'banking',
      label: 'Banking',
      icon: 'business_center'
    }
  ];
}
