function Input({ label, placeholder, type = "text", ...props }) {
    return (
        <div className="input-group">
            <label >
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                {...props}
             />
        </div>
    );

}
export default Input;