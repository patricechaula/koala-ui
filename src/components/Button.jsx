import { useTheme } from "./theme";
export default function Button({ children, style, onClick }) {

    const theme = useTheme();

    const finalStyle = {
      ...style,
      color: theme.foregroundColor,
      backgroundColor: theme.backgroundColor,
      borderRadius: '5px',
      border: 'none',
      padding: '10px',
    }

    return (
      <button
        onClick={onClick}
        style={finalStyle}>
        {children}
      </button>
    )
  }