declare module "craft-ds" {
  import * as React from "react";

  // Button component
  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
  }
  export const Button: React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  >;

  // DropdownMenu components
  export const DropdownMenu: React.ComponentType<any>;
  export const DropdownMenuTrigger: React.ComponentType<any>;
  export const DropdownMenuContent: React.ComponentType<any>;
  export const DropdownMenuItem: React.ComponentType<any>;
  export const DropdownMenuCheckboxItem: React.ComponentType<any>;
  export const DropdownMenuRadioItem: React.ComponentType<any>;
  export const DropdownMenuLabel: React.ComponentType<any>;
  export const DropdownMenuSeparator: React.ComponentType<any>;
  export const DropdownMenuShortcut: React.ComponentType<any>;
  export const DropdownMenuGroup: React.ComponentType<any>;
  export const DropdownMenuPortal: React.ComponentType<any>;
  export const DropdownMenuSub: React.ComponentType<any>;
  export const DropdownMenuSubContent: React.ComponentType<any>;
  export const DropdownMenuSubTrigger: React.ComponentType<any>;
  export const DropdownMenuRadioGroup: React.ComponentType<any>;

  // ThemeProvider component
  export interface ThemeProviderProps {
    children?: React.ReactNode;
    // Add more props as needed
  }
  export const ThemeProvider: React.ComponentType<ThemeProviderProps>;

  // Layout components
  export interface LayoutProps {
    children: React.ReactNode;
    className?: string;
  }
  export const Layout: React.ComponentType<LayoutProps>;

  export interface ThemeProps {
    children: React.ReactNode;
  }
  export const Theme: React.ComponentType<ThemeProps>;

  export interface MainProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
  }
  export const Main: React.ComponentType<MainProps>;

  export interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
  }
  export const Section: React.ComponentType<SectionProps>;

  export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
  }
  export const Container: React.ComponentType<ContainerProps>;

  export interface ArticleProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
  }
  export const Article: React.ComponentType<ArticleProps>;

  // ThemeToggle component
  export const ThemeToggle: React.ComponentType<any>;
}
