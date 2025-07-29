import "./button.css";
import { Icon } from '@iconify/react';

export default function Button({ href, label, className, icon }:
  { href: string; label: string; className: string; icon:string }) {
  const sendEmail = () => {
    window.location.href = href;

    return null
  }
  return (
    <button className={className} onClick={sendEmail}>
      {label+ " "} <Icon icon={icon}/>
    </button>
  );
};