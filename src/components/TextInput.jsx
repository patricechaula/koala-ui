import { useTheme } from "./theme";
export default function TextInput({ name, id, style, value, onChange }) {
    const theme = useTheme();

    const finalStyle = {
        ...style,
        color: theme.foregroundColor,
        border: `1px solid ${theme.foregroundColor}`,
        borderRadius: '5px',
        padding: '10px',
    }

    return (
        <input style = { finalStyle }
        type = "text"
        value = { value }
        name = { name }
        onChange = { onChange }
        id = { id }
        />
    )
}