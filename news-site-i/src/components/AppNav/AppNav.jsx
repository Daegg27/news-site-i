function AppNav(props) {

  const{navItems, handleNavClick} = props

  return (
    <div>
      {navItems.map((navItems => (
        <a onClick={() => handleNavClick(navItems.value)}>    {navItems.label}     </a>
      ))
      )

      }
    </div>
  )
}

export default AppNav;
