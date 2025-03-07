interface ButtonProps {
  text?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'third' | 'daftar' | 'success' | 'login' | 'arrowButton' | 'none' | 'transparent' | 'transparent2';
  disabled?: boolean;
  icon?: React.ReactNode;
  full?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button', variant = 'primary', disabled = false, icon, full = false }) => {
  const buttonStyles = {
    primary: 'bg-blue-500 rounded-lg px-3 md:px-6 py-2 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-500 rounded-lg px-3 md:px-6 py-2 hover:bg-gray-700 text-white',
    third: 'bg-[#5e5e9b] rounded-lg px-3 md:px-6 py-2 hover:bg-primary-400 text-white',
    daftar: 'bg-secondary-800 rounded-lg px-3 md:px-6 py-2 hover:bg-secondary-600 text-[#383838]',
    success: 'bg-green-500 rounded-lg px-3 md:px-6 py-2 hover:bg-green-700 text-white',
    login: 'bg-green-500 rounded-lg px-3 md:px-6 py-2 hover:bg-green-700 text-white',
    arrowButton: 'px-3 py-3 bg-[#A3A3A3] rounded-full hover:scale-105 transition-transform duration-300',
    none: '',
    transparent: 'border border-white text-white rounded-lg px-3 md:px-6 py-2 hover:bg-primary-600 transition-transform duration-300',
    transparent2: 'border border-primary-400 text-primary-400 rounded-lg px-3 md:px-6 py-2 hover:bg-primary-600 transition-transform duration-300',
  };

  return (
    <button
      className={`font-semibold flex justify-center text-center items-center  ${full ? 'w-full' : ''} ${disabled} ${buttonStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={!disabled ? onClick : undefined}
      type={type}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {text && <span className={icon ? 'ml-2' : ''}>{text}</span>}
    </button>
  );
};

export default Button;
