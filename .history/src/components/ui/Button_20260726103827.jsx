export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white",

    secondary:
      "bg-white text-black hover:bg-gray-100",

    outline:
      "border border-white/10 text-white hover:border-blue-500",

    ghost:
      "hover:bg-white/5 text-white",
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-6
        py-3
        font-medium
        transition-all
        duration-300
        hover:-translate-y-1
        active:scale-95
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}