export default function Buttion(props: any): JSX.Element {
  return (
    <button className={props.class} onClick={props.onClick}>
      <span>{props.children}</span>
      {props.icon ? <i className={props.icon}></i> : null}
      </button>
  );
}
