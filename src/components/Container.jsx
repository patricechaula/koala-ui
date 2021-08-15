import { useTheme } from "./theme";
export default function Container({children, style}) {

    const finalStyle = {
        ...style,
        width: '80%',
        margin: 'auto',
    }

    return (
        <div style={finalStyle}>
            {children}
        </div>
    )
}