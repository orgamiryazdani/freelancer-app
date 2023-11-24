function TextField({ label, name, value, onChange }) {
    return (
        <div>
            <label className="mb-1 block" htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                className="textField__input"
                type="text"
                name={name}
                id="phonenumber"
                autoComplete="off"
            />
        </div>
    )
}

export default TextField