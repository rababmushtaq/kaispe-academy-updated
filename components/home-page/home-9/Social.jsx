const Social = () => {
  const socialIcons = [
    {
      href: "https://www.facebook.com/Kaispeco/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0",
      iconClass: "fab fa-facebook-square",
    },
    {
      href: "https://twitter.com/kaispe_",
      iconClass: "fab fa-twitter-square",
    },
    {
      href: "https://pk.linkedin.com/company/kaispe",
      iconClass: "fab fa-linkedin",
    },
    {
      href: "https://www.youtube.com/@kaispe",
      iconClass: "fab fa-youtube-square",
    },
  ];

  return (
    <ul className="d-flex justify-content-center social-icon style-none">
      {socialIcons.map((socialIcon, index) => (
        <li key={index}>
          <a href={socialIcon.href}>
            <i className={socialIcon.iconClass} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
