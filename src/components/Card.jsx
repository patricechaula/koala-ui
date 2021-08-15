import {useTheme} from "./theme";

export default function Card({children, style}) {
    const finalStyle = {
        ...style,
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px'
    }
    return (
        <div style={finalStyle}>
            {children}
        </div>
    )
}

export function CardHeader({children, style}) {
    const finalStyle = {
        ...style
    }

    return (
        <h3 style={finalStyle}>
            {children}
        </h3>
    )
}

export function CardBody({children, style}) {
    const finalStyle = {
        marginTop: '10px',
        padding: '10px',
        borderTop: '1px solid #ddd',
        ...style,
    }

    return (
        <div style={finalStyle}>
            {children}
        </div>
    )
}

export function CardFooter({children, style}) {
    const finalStyle = {
        borderTop: '1px solid #ddd',
        marginTop: '10px',
        padding: '10px',
        ...style,
    }

    return (
        <div style={finalStyle}>
            {children}
        </div>
    )
}
