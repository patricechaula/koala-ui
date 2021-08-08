import { useTheme } from "./theme";


export function Container({children, style}) {

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

export function Button({ children, style, onClick }) {

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


export function CheckBox({ name, checked, onChange, style }) {
  const theme = useTheme();

  const finalStyle = {
    ...style,
    color: theme.foregroundColor,
    backgroundColor: theme.backgroundColor,
    padding: '10px',
  }

  return (
    <input
      style={finalStyle}
      type="checkbox"
      name={name}
      onChange={onChange}
      checked={checked} />
  )
}


export function TextInput({ name, id, style, value, onChange }) {
  const theme = useTheme();

  const finalStyle = {
    ...style,
    color: theme.foregroundColor,
    border: `1px solid ${theme.foregroundColor}`,
    borderRadius: '5px',
    padding: '10px',
  }

  return (
    <input
      style={finalStyle}
      type="text"
      value={value}
      name={name}
      onChange={onChange}
      id={id} />
  )
}


export function Label({ children, style }) {
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