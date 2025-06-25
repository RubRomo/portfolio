type Props = {
  url: string;
  title: string;
  iconClass: string;
};

const SocialIcon = ({ url, title, iconClass }: Props) => {
  return (
    <a
      className="social-link pe-2"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <i className={iconClass} aria-hidden="true"></i>
      <span className="visually-hidden">{title}</span>
    </a>
  );
};

export default SocialIcon;
