import { useTheme } from "./theme";
export default function Label({ children, style }) {
    const theme = useTheme();

    const finalStyle = {
      ...style,
      color: theme.foregroundColor,
      padding: '10px',
    }

    return (
      <label
        style={finalStyle}
      >{children}</label>)
  }