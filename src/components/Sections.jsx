/* eslint-disable react/prop-types */
export default function Section({ children, title, ...props }) {
  return (
    <section {...props}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
