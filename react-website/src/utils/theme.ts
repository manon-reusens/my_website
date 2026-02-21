import { theme } from 'antd';
import type { ThemeConfig } from 'antd';

export const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: '#059669', // Forest green
    colorLink: '#059669',
    colorBgBase: '#f9fafb',
    colorBgContainer: '#ffffff',
    colorBgElevated: '#f3f4f6',
    colorText: '#111827',
    colorTextSecondary: '#6b7280',
    colorBorder: '#e5e7eb',
    fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: 16,
    borderRadius: 8,
  },
  components: {
    Layout: {
      colorBgHeader: '#ffffff',
      colorBgBody: '#f9fafb',
    },
    Card: {
      colorBgContainer: '#ffffff',
    },
    Button: {
      colorPrimary: '#059669',
      algorithm: true,
    },
    Tag: {
      colorPrimary: '#059669',
    },
  },
};

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#10b981', // Emerald green
    colorLink: '#10b981',
    colorBgBase: '#1a1f2e',
    colorBgContainer: '#232936',
    colorBgElevated: '#2d3548',
    colorText: '#e6edf3',
    colorTextSecondary: '#9ca3af',
    colorBorder: '#374151',
    fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: 16,
    borderRadius: 8,
  },
  components: {
    Layout: {
      colorBgHeader: '#232936',
      colorBgBody: '#1a1f2e',
    },
    Card: {
      colorBgContainer: '#232936',
    },
    Button: {
      colorPrimary: '#10b981',
      algorithm: true,
    },
    Tag: {
      colorPrimary: '#10b981',
    },
  },
};

export const accentColorSecondary = {
  light: '#ea580c', // Vibrant coral for light mode
  dark: '#d97706', // Muted amber for dark mode
};
