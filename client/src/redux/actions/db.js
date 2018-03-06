export function adminShortcuts(role) {
  let baseNav = []

  if (role.pf_users.includes("r")) {
    baseNav.push({ id: 1, title: "Users", href: "/users", basic_description: "Passwords, deletion, etc", icon: "users" })
  }

  if (role.pf_roles.includes("r")) {
    baseNav.push({ id: 2, title: "Roles", href: "/roles", basic_description: "Role abilities and who has which role", icon: "traffic-cone" })
  }

  if (role.pf_comments.includes("r")) {
    baseNav.push({ id: 3, title: "Comments", href: "/comments", basic_description: "Who said what and when", icon: "comment" })
  }

  /*if (role.pf_codes.includes("r")) {
    baseNav.push({ id: 4, title: "Code Browser", href: "/code", basic_description: "Code viewing code", icon: "flow-tree" })
  }*/

  if (role.pf_notifications.includes("r")) {
    baseNav.push({ id: 5, title: "Notifications", href: "/notifications", basic_description: "See all notifications across all users", icon: "attention" })
  }

  if (role.pf_resumes.includes("r")) {
    baseNav.push({ id: 6, title: "Resumes", href: "/resumes", basic_description: "Resumes for fun and glory", icon: "newspaper" })
  }

  return baseNav
}

export function authenticatedNavigation(user) {
  var baseNav = [
    { id: 1, style: { width: "117px" }, href: "/", icon: "home", title: "Home", active: false },
  ]

  if (user.role.pf_graphics.includes("r")) {
    baseNav.push({ id: 2, style: { width: "117px" }, href: "/graphics", icon: "eye", title: "Web Graphics", active: false })
  }

  if (user.role.pf_posts.includes("r")) {
    baseNav.push({ id: 3, style: { width: "117px" }, href: "/posts", icon: "doc", title: "Posts", active: false })
  }

  if (user.role.pf_projects.includes("r")) {
    baseNav.push({ id: 4, style: { width: "117px" }, href: "/projects", icon: "folder", title: "Projects", active: false })
  }

  if (user.role.name.includes("Admin")) {
    baseNav.push({ id: 5, style: { width: "117px" }, href: "/admin", icon: "network", title: "Admin Home", active: false })
  }

  if (user.role.pf_mangas.includes("r")) {
    baseNav.push({ id: 6, style: { width: "117px" }, href: "/mangas", icon: "book-open", title: "Manga", active: false })
  }

  if (user.role.pf_media.includes("r")) {
    baseNav.push({ id: 7, style: { width: "117px" }, href: "/media", icon: "picture", title: "Media", active: false })
  }

  baseNav.push({ id: 8, style: { width: "117px" }, href: ("/users/" + user.id + "?profile=true"), icon: "user", title: "Profile", active: false })

  return baseNav
}

export function contactForms() {
  return [
    { id: 1, name: "Classy" },
    { id: 2, name: "Modern" }
  ]
}

export function navigation() {
  return [
    { id: 1, style: { width: "117px" }, href: "/", icon: "home", title: "Home", active: false },
    { id: 2, style: { width: "117px" }, href: "/about_me", icon: "user", title: "About Me", active: false },
    { id: 3, style: { width: "117px" }, href: "/resume_welcome", icon: "newspaper", title: "Resume", active: false },
    { id: 4, style: { width: "117px" }, href: "/portfolio", icon: "folder", title: "Portfolio", active: false },
    { id: 5, style: { width: "117px" }, href: "/graphics_welcome", icon: "eye", title: "Web Graphics", active: false },
    { id: 6, style: { width: "117px" }, href: "/blog", icon: "doc", title: "Blog", active: false },
    { id: 7, style: { width: "117px" }, href: "/contact", icon: "mail", title: "Contact", active: false },
    { id: 8, style: { width: "117px" }, href: "/login", icon: "login", title: "Login", active: false },
  ]
}

export function welcomeShortcuts() {
  return [
    { id: 1, title: "More About Louis Alridge", href: "/about_me", basic_description: "Basic overview of my interests and goals", icon: "user" },
    { id: 2, title: "More About What I Can Do", href: "/resume_welcome", basic_description: "Info about what skills I have", icon: "newspaper" },
    { id: 3, title: "More About What I've Done", href: "/portfolio", basic_description: "List of projects I've been a part of", icon: "folder" },
    { id: 4, title: "My Javascript 3D Graphics", href: "/graphics_welcome", basic_description: "3D Graphics hosted here", icon: "eye" },
    { id: 5, title: "My Contact Information", href: "/contact", basic_description: "Basic Contact Info & a way to reach me on this site", icon: "mail" },
    { id: 6, title: "My Blog", href: "/blog", basic_description: "Checkout my blog on Ruby on Rails, React, Elixir, DevOps, and whatever else I feel like talking about", icon: "doc-text" }
  ]
}

export function welcomeButtonSliders() {
  return [
    { id: 1, mode: "interests", active: true },
    { id: 2, mode: "contact_about", active: false },
    { id: 3, mode: "talk_topics", active: false },
    { id: 4, mode: "follow", active: false }
  ]
}

export function welcomeTabs() {
  return [
    { id: 1, buttonContent: "Frontend Development", icon: "eye", active: true },
    { id: 2, buttonContent: "Backend Development", icon: "code", active: false },
    { id: 3, buttonContent: "User Experience", icon: "user", active: false },
    //{ id: 4, buttonContent: "Web Frameworks", icon: "star", active: false },
    { id: 5, buttonContent: "DevOps", icon: "cog", active: false }
  ]
}