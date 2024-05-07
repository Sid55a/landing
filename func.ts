export const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")?.substring(1);
  const targetSection = document.getElementById(targetId || "");
  const offsetTop = targetSection?.offsetTop;

  if (offsetTop) {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};