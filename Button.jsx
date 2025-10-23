const Button = ({ children, variant = 'primary', onClick }) => {
  let baseClasses = 'px-4 py-2 font-semibold rounded transition duration-150 ease-in-out';
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'bg-blue-600 hover:bg-blue-700 text-white';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-200 hover:bg-gray-300 text-gray-800';
      break;
    case 'danger':
      variantClasses = 'bg-red-600 hover:bg-red-700 text-white';
      break;
    default:
      variantClasses = 'bg-blue-600 hover:bg-blue-700 text-white';
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;