import { useTheme } from "./theme";
export default function CheckBox({ name, checked, onChange, style }) {
    const theme = useTheme();

    const finalStyle = {
        ...style,
        color: theme.foregroundColor,
        backgroundColor: theme.backgroundColor,
        padding: '10px',
    }

    return ( <
        input style = { finalStyle }
        type = "checkbox"
        name = { name }
        onChange = { onChange }
        checked = { checked }
        />
    )
}