import React from 'react';
import type { ReactNode, CSSProperties } from 'react';


type ChildrenProps = { children?: ReactNode; style?: CSSProperties };

export const View: React.FC<ChildrenProps> = ({ children, style }) => (
  <div style={style}>{children}</div>
);

export const ScreenView: React.FC<ChildrenProps> = ({ children, style }) => (
  <div style={style}>{children}</div>
);

export const Text: React.FC<ChildrenProps> = ({ children, style }) => (
  <span style={style}>{children}</span>
);

type ButtonProps = ChildrenProps & { title?: string };

export const Button: React.FC<ButtonProps> = ({ children, title, style }) => (
  <button style={style}>
    {title} {children}
  </button>
);

export const StyleSheet = {
  create: <T,>(styles: T) => styles,
};

type StatusBarProps = { backgroundColor?: string; barStyle?: string };

export const StatusBar: React.FC<StatusBarProps> = ({ backgroundColor }) => {
  const statusBarStyle: CSSProperties = {
    height: '20px',
    backgroundColor: backgroundColor || 'transparent',
    position: 'relative',
  };
  return <div style={statusBarStyle}></div>;
};

export function useColorScheme() {
  return {};
}

export default { v: 2 };
