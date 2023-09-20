export default function FormError({ children }) {
  return (
    <p className='text-red-500 absolute left-2 -bottom-3 text-xs'>{children}</p>
  );
}
