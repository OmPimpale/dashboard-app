export interface IWidget {
  id: string;
  title: string;
  text: string;
}

export interface ICategory {
  id: string;
  name: string;
  enabled: boolean;
  widgets: IWidget[];
}

export interface IDashboardState {
  categories: ICategory[];
  searchQuery: string;
}
